import React, { Component } from "react";

export class Hero extends Component {

  render() {

    const { content, isLoading } = this.props
    if (isLoading) return null

    return (
        <img
        // the ternary op is used to switch between small and large imgs depending on screen size
          src={window.innerWidth >= 810 ? content.backgroundImage.url : content.backgroundImageMobile.url}
          style={imgStyle}
          className="fadeIn animated slow" 
          alt="Hero"/>
    )
  }
}

const imgStyle = {
  width: '100%',
  objectFit: 'cover',
  display: 'block'
}

export default Hero;
