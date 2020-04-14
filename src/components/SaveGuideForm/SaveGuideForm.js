import React, { Component } from 'react'
import Nav from '../Nav/Nav'
class SaveGuideForm extends Component {
  render () {
    return (
      <div>
        <Nav></Nav>
        <form name="add-bookmark">
          <label htmlFor="save-item-title">Nickname</label>
            <input type="text" name="save-item-title" id="save-item-title"/>
          <label htmlFor="save-item-note">Note</label>
            <input type="text" name="save-item-note" id="save-item-note"/>
          <button>Not Interested</button>
          <button>OK, add it</button>
        </form>
      </div>
    )
  }
}

export default SaveGuideForm