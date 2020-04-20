import React, { Component } from 'react'
// this component is for a future goal of user configuring theme settings based on the menu config in the game

class Config extends Component {

  render () {

    return(
      <div>
        <p>Upper Right Corner:</p>
        <select>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <p>Upper Left Corner:</p>
        <select>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <p>Lower Right Corner:</p>
        <select>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </select>
        <p>Lower Left Corner:</p>
        <select>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </select>

      </div>
    )
  }
}

export default Config