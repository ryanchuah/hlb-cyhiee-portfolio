

const currentYearItem = await getDbDataFromQuery('year', { year: req.params.year }, false)
const currentYearHero = await getDbDataFromQuery('yearhero', { _id: currentYearItem.yearHero }, false)

const uploadArray = await getDbDataFromQuery('upload_file',
    {
        related: {
            $elemMatch: {
                ref: currentYearHero._id,
                $or: [
                    { field: 'backgroundImage' },
                    { field: 'backgroundImageMobile' }
                ]
            }
        }
    },
    true
)

currentYearHero.backgroundImage = uploadArray.find(uploadItem => (
    uploadItem.related.some(relatedItem => relatedItem.field === 'backgroundImage')
))
currentYearItem.yearHero = currentYearHero


const currentYearStatistics = await getDbDataFromQuery('yearstatistic', { year: req.params.year }, true)

const statsUploadArray = await getDbDataFromQuery('upload_file',
    {
        related: {
            $elemMatch: {
                $or: currentYearStatistics.map(item => ({ ref: item._id })),
                kind: "Yearstatistic"
            }
        }
    },
    true
)

currentYearStatistics.forEach(statsItem => {
    var uploadItem = statsUploadArray.find(uploadItem => (
        uploadItem.related.some(relatedItem => (
            relatedItem.ref.equals(statsItem._id) && relatedItem.kind === 'Yearstatistic'
        ))
    ))
    statsItem.image = uploadItem
})

const yearStatistics = {
    title: currentYearItem.titleStatistics,
    statistics: currentYearStatistics
}
currentYearItem.yearStatistics = yearStatistics



const judgesArray = await getDbDataFromQuery('yearjudge',
    { year: req.params.year },
    true)

const judgeUploadArray = await getDbDataFromQuery('upload_file',
    {
        related: {
            $elemMatch: {
                $or: judgesArray.map(item => ({ ref: item._id })),
                kind: "Yearjudge"
            }
        }
    },
    true
)

judgesArray.forEach(judgeItem => {
    var uploadItem = judgeUploadArray.find(uploadItem => (
        uploadItem.related.some(relatedItem => (
            relatedItem.ref.equals(judgeItem._id)
        ))
    ))
    judgeItem.image = uploadItem
})

const yearJudges = {
    title: currentYearItem.titleJudgesAndMentors,
    subtitleMentors: currentYearItem.subtitleMentors,
    subtitleRegionalJudges: currentYearItem.subtitleRegionalJudges,
    judges: judgesArray
}

currentYearItem.yearJudges = yearJudges




const mentorsArray = await getDbDataFromQuery('yearmentor',
    { year: req.params.year },
    true)

const mentorUploadArray = await getDbDataFromQuery('upload_file',
    {
        related: {
            $elemMatch: {
                $or: mentorsArray.map(item => ({ ref: item._id })),
                kind: "Yearmentor"
            }
        }
    },
    true
)

mentorsArray.forEach(mentorItem => {
    var uploadItem = mentorUploadArray.find(uploadItem => (
        uploadItem.related.some(relatedItem => (
            relatedItem.ref.equals(mentorItem._id)
        ))
    ))
    mentorItem.image = uploadItem
})

const yearMentors = {
    mentors: mentorsArray
}

currentYearItem.yearMentors = yearMentors




const spreadSheetUploadItem = await getDbDataFromQuery('upload_file',
    {
        related: {
            $elemMatch: {
                $and: [
                    { ref: currentYearItem._id },
                    { kind: "Year" }
                ]
            }
        }
    },
    false
)

currentYearItem.participantInfoSpreadsheet = spreadSheetUploadItem
        
    


module.exports = new Year()