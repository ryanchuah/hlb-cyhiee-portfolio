import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import TitleHeader from '../components/TitleHeader'
import styles from '../Styles.module.css'
import GalleryModal from '../components/GalleryModal'

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      itemClicked: null,
    }
  }
  render() {
    const { content } = this.props
    return (
      <div className={styles.gallerySectionBackground}>

        <TitleHeader
          title={content.title}
          subtitle={content.subtitle}
          color='white' />

        <div style={{ paddingBottom: '5%' }}>
          <Carousel
            nextIcon={<img src={require('../images/icons/chevronRight.png')} width='30rem' alt="Chevron Right" />}
            prevIcon={<img src={require('../images/icons/chevronLeft.png')} width='30rem' alt="Chevron Left" />}>

            {
              content.galleryImages.map(item => (
              <Carousel.Item key={item._id}>
                <img 
                  src={item.url} 
                  alt={item.name}
                  className="d-block w-100"
                  onClick={() => this.setState({ showModal: true, itemClicked: item })} 
                />
              </Carousel.Item>
              ))
            }
          </Carousel>
        </div>

        <GalleryModal
          show={this.state.showModal}
          item={this.state.itemClicked}
          onHide={() => this.setState({ showModal: false, itemClicked: null })} />
      </div>
    )
  }
}

export default Gallery
