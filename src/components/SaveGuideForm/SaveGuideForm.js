import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import MonsterApiService from '../../services/monster-api-service'
import './SaveGuideForm.css'

class SaveGuideForm extends Component {
  state = {
    nickname: '',
    note: '',
    message: ''
  }

  clearForm = () => {
    document.getElementById("add-guide-form").reset();
  }

  handleSubmit = ev => {
    ev.preventDefault()
    let id = this.props.selectedid
    let name = this.state.nickname
    let note = this.state.note
    const user_name = TokenService.getUserName()
    const guide = {
      monster_id: id,
      name: name, 
      note: note, 
      user_name: user_name
    }

    MonsterApiService.postGuide(user_name, guide)
      .then(this.clearForm)
      .then(res => res.ok? this.props.handleCloseModal : '')
      .catch(e => this.setState({ message: e.error }))
  }

  handleInputChange = (ev) => {
    ev.preventDefault()
    const target = ev.target;
    const value = target.value 
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div className="overlay-container">
        <div className="overlay modal" >
          <form name="add-guide-form" id="add-guide-form" onSubmit={this.handleSubmit}>
            <label htmlFor="nickname">Nickname</label>
              <input autoFocus type="text" name="nickname" id="nickname" required onChange={this.handleInputChange}/>
            <label htmlFor="note">Note</label>
              <input type="text" name="note" id="note" required onChange={this.handleInputChange}/>
            <button className="add-guide-button" type="submit">OK, add it</button>
            <button className="add-guide-button" onClick={this.props.handleCloseModal}>Not Interested</button>
            {this.state.message 
            ? <p id="message">{this.state.message}</p>
            : '' }
          </form>
        </div>
      </div>
    )
  }
}

export default SaveGuideForm