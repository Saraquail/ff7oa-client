import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import TokenService from '../../services/token-service'

class SaveGuideForm extends Component {

  handleSubmit = ev => {
    ev.preventDefault()
    let id = this.props.selectedid
    const user_name = TokenService.getUserName()
    console.log(user_name, id)
  }


  render () {
    return (
      <div>
        <form name="add-guide" onSubmit={this.handleSubmit}>
          <label htmlFor="save-item-title">Nickname</label>
            <input type="text" name="save-item-title" id="save-item-title"/>
          <label htmlFor="save-item-note">Note</label>
            <input type="text" name="save-item-note" id="save-item-note"/>
          <button onClick={this.props.handleCloseModal}>Not Interested</button>
          <button type="submit">OK, add it</button>
        </form>
      </div>
    )
  }
}

export default SaveGuideForm