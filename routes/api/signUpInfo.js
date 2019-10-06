const express = require("express")
const router = express.Router()

var mongoUtil = require('../../mongoUtil')
var db = mongoUtil.getDbTest()

router.post("/", (req, res) => {
  const newSignUpInfo = {
    teamName: req.body.teamName,
    state: req.body.state,
    members: req.body.members,
    projectIdea: req.body.projectIdea,
    projectValue: req.body.projectValue,
    projectImplementation: req.body.projectImplementation
  }

  db.collection('signupinfos').insertOne(newSignUpInfo)
    .then(newSignUpInfo => { res.status(200).json(newSignUpInfo); client.close(); })
    .catch(err => res.status(400))
}
)

module.exports = router
