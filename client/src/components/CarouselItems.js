import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export class CarouselItems extends Component {

  render() {
    return (
      <React.Fragment>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require(`../images/gallery/${item}.jpg`)}
                alt="Third slide"
              />
            </Carousel.Item>
          ))
        }
      </React.Fragment>

    )
  }
}

export default CarouselItems
