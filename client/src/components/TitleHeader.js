import React, { Component } from 'react'

export class TitleHeader extends Component {

  getStyle = () => {
    return {
      position: 'relative',
      zIndex: '1',
      color: this.props.color,
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }
  }
//TODO: change subtitle to !== undefined
  render() {
    const { title, subtitle, wrapperClassName } = this.props
    if (subtitle !== null || subtitle !== undefined || subtitle !== "") {
      return (
        <div style={this.getStyle()} 
        className={wrapperClassName === undefined ? 'px-3 py-5' : wrapperClassName}>
          <h1 className="text-center font-weight-bold" style={this.props.style}>{title}</h1>
          <h3 className='text-center'>{subtitle}</h3>
        </div>
      )
    }

    return (
      <div style={this.getStyle()} 
      className={wrapperClassName === undefined ? 'px-3 py-5' : wrapperClassName}>
        <h1 className="text-center font-weight-bold">{title}</h1>
      </div>
    )

  }
}

export default TitleHeader
