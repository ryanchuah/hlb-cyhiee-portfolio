const express = require("express");
const router = express.Router();
var XLSX = require('xlsx')
var mongoUtil = require('../../mongoUtil')
var db = mongoUtil.getDbStrapi()
const axios = require('axios')

router.get('/:year', async (req, res) => {

  getDbDataFromQuery = async (collection, query, multiple) => {
    if (multiple) {
      return db.collection(collection).find(query)
        .toArray()
    }

    resultArray = await db.collection(collection).find(query).sort({ updatedAt: -1 }).limit(1).toArray()
    return resultArray[0]
  }
  const winnersOnly = req.query.winners_only === "true" ? true : false
  const numberOfWinners = 3
  var limit
  if (winnersOnly) {
    limit = numberOfWinners
  } else {
    if (req.query.limit === undefined) {
      limit = -1
    } else {
      limit = req.query.limit
    }
  }

  const currentYearItem = await getDbDataFromQuery('year', { year: req.params.year }, false)

  const spreadSheetUploadItem = await getDbDataFromQuery('upload_file',
    {
      related: {
        $elemMatch: {
          $or: [{ ref: currentYearItem._id },
          { kind: "Year" }]
        }
      }
    },
    false
  )

  const fileUrl = spreadSheetUploadItem.url

  spreadsheetArrayBuffer = await axios(fileUrl, { responseType: 'arraybuffer' })

  var data = new Uint8Array(spreadsheetArrayBuffer.data)

  var dataWb = XLSX.read(data, {
    type: "array",
    sheetRows: parseInt(limit) + 1
  });

  const spreadSheetItem = XLSX.utils.sheet_to_json(dataWb.Sheets.Sheet1)

  var headerWb = XLSX.read(data, {
    type: "array",
    sheetRows: 1
  });

  const spreadSheetHeaderArray = XLSX.utils.sheet_to_json(headerWb.Sheets.Sheet1, {header: 1})[0]
  const pattern = /M[0-9] Full Name/i
  var memberLimit = 0
  spreadSheetHeaderArray.forEach(item => {
    if (item.match(pattern)){
      memberLimit += 1
    }
  })

  var participantData = {}
  participantData.spreadsheetItem = spreadSheetItem
  participantData.memberLimit = memberLimit
  res.json(participantData)
})

module.exports = router