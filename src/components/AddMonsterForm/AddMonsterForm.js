import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MonsterApiService from '../../services/monster-api-service'
import TokenService from '../../services/token-service'
import './AddMonsterForm.css'

class AddMonsterForm extends Component {

  state = {
    name: '',
    hp: '',
    mp: '',
    exp: '',
    gil: '',
    weakness: 'N/A',
    strength: 'N/A',
    location: '',
    level: '',
    steal: 'N/A',
    drops: 'N/A',
    enemy_skill: 'N/A'
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

  handleCancelForm = () => {
    this.props.history.goBack()
  }

  handleSubmitForm = ev => {
    ev.preventDefault()
    let monster = this.state
    let user = TokenService.getUserName()
    MonsterApiService.postMonster(user, monster)
      .then(this.props.history.goBack())
      .catch()
    }

  render () {
    return (
      <div className="add-monster-container">
        <form name="add-monster-form" id="add-monster-form" onSubmit={this.handleSubmitForm}>
        <div className='form description'>
          All fields are required. If monster has no weakness/strength/drop/steal, simply put N/A as the value for that field.
        </div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required onChange={this.handleInputChange} />
          <label htmlFor="hp">HP (number)</label>
          <input type="number" name="hp" id="hp" required onChange={this.handleInputChange} />
          <label htmlFor="mp">MP (number)</label>
          <input type="number" name="mp" id="mp" required onChange={this.handleInputChange} />
          <label htmlFor="mp">EXP (number)</label>
          <input type="number" name="exp" id="exp" required onChange={this.handleInputChange} />
          <label htmlFor="gil">GIL (number)</label>
          <input type="number" name="gil" id="gil" required onChange={this.handleInputChange} />
          <label htmlFor="gil">Weakness</label>
          <input type="text" name="weakness" id="weakness" defaultValue = 'N/A' required onChange={this.handleInputChange} />
          <label htmlFor="strength">Strength</label>
          <input type="text" name="strength" id="strength" defaultValue = 'N/A' required onChange={this.handleInputChange} />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" required onChange={this.handleInputChange} />
          <label htmlFor="level">Level (number)</label>
          <input type="number" name="level" id="level" required onChange={this.handleInputChange} />
          <label htmlFor="steal">Steal</label>
          <input type="text" name="steal" id="steal" defaultValue = 'N/A' required onChange={this.handleInputChange} />
          <label htmlFor="drops">Drops</label>
          <input type="text" name="drops" id="drops" defaultValue = 'N/A' 
          required onChange={this.handleInputChange} />
          <label htmlFor="enemy_skill">Enemy Skill</label>
          <input type="text" name="enemy_skill" id="enemy_skill" defaultValue = 'N/A' required onChange={this.handleInputChange} />
          <button type="reset" onClick={this.handleCancelForm}>Not Interested</button>
          <button type="submit">OK, add it</button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddMonsterForm)


// for(let i = 0; i < ev.target.length; i++){
//   monster.push(ev.target[i].value)
// }