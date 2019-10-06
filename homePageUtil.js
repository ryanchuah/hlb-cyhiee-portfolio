class HomePage {
    async insertBackgroundImageData (sectionItem){
      const uploadArray = await getDbDataFromQuery('upload_file',
        {
          related: {
            $elemMatch: {
              ref: sectionItem._id, 
              $or: [
                { field: 'backgroundImage' },
                { field: 'backgroundImageMobile' }
              ]
            }
          }
        },
        true
        )
    
      sectionItem.backgroundImage = uploadArray.find(uploadItem => (
        uploadItem.related.some(relatedItem => relatedItem.field === 'backgroundImage')
      ))
    
      sectionItem.backgroundImageMobile = uploadArray.find(uploadItem => (
        uploadItem.related.some(relatedItem => relatedItem.field === 'backgroundImageMobile')
      ))
    }
    
    async insertWinnerData(sectionItem) {
      const currentYearWinners = await getDbDataFromQuery('winner', {}, true)
      const winnersUploadArray = await getDbDataFromQuery('upload_file', 
      {
        related: {
          $elemMatch: {
            $or: currentYearWinners.map(item => ({ ref: item._id })), 
            kind: "Winner"
          }
        }
      },
      true)

      currentYearWinners.forEach(winnerItem => {
        var uploadItem = winnersUploadArray.find(uploadItem => (
          uploadItem.related.some(relatedItem => (
            relatedItem.ref.equals(winnerItem._id) && relatedItem.kind === 'Winner'
          ))
        ))
        winnerItem.image = uploadItem
      })

      sectionItem.winners = currentYearWinners
    }
    
    async insertGalleryData (sectionItem){
      const uploadArray = await getDbDataFromQuery('upload_file', 
      {
        related: {
          $elemMatch: {
            ref: sectionItem._id, 
            $or: [
              { field: 'images' }
            ]
          }
        }
      },
      true)
    
      sectionItem.galleryImages = uploadArray
    }
  
  }

  module.exports = new HomePage()