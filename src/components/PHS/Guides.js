import React, { Component } from 'react'

class Guides extends Component {

  render () {
    const guides = this.props
    if(!guides) {
      return <p> Loading Guides</p>
    }
    return(
      <div className="guides-list">
        <h3>name: {guides.name}</h3>
        <p>note: {guides.note}</p>
      </div>
    )
  }
}

export default Guides