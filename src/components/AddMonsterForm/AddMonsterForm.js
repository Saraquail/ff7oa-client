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
    enemy_skill: 'N/A',
    message: ''
  }

  handleInputChange = (ev) => {
    ev.preventDefault()

    const target = ev.target;
    const { value, name, type } = target;

    this.setState({
      [name]: type === 'number' ? parseInt(value) : value
    });
  }

  handleCancelForm = () => {
    this.props.history.goBack()
  }

  handleSubmitForm = ev => {
    ev.preventDefault()
    let monster = this.state
    let user = TokenService.getUserName()
    this.validateMonster(user, monster)
    }

    //makes sure all the values are in range of what is possible in the game
    validateMonster = (user, monster) => {
      let { hp, mp, gil, exp, level }  = this.state
      
      if (hp < 1 || hp > 1000000) {
        this.setState({
          message: 'HP must be between 1 - 1,000,000'
        })
      }
      else if (mp < 1 || mp > 200000) {
        this.setState({
          message: 'MP must be between 1 - 200,000'
        })
      }
      else if (gil < 1 || mp > 200000) {
        this.setState({
          message: 'GIL must be between 1 - 200,000'
        })
      }
      else if (exp < 1 || exp > 500000) {
        this.setState({
          message: 'EXP must be between 1 - 500,000'
        })
      }
      else if (level < 1 || level > 99) {
        this.setState({
          message: 'Level must be between 1 - 99'
        })
      }
      else {
        MonsterApiService.postMonster(user, monster)
        .then(res => res.id ? this.props.history.goBack()
        : '')
        .catch(e => this.setState({ message: e.error }))
      }
    }

    renderInputs = () => {
      const FIELDS = [
        { name: 'name', label: 'Name' },
        { name: 'hp', label: 'HP', type: 'number', min: 0, max: 1000000 },
        { name: 'mp', label: 'MP', type: 'number', min: 0, max: 20000},
        { name: 'exp', label: 'EXP', type: 'number', min: 0, max: 500000 },
        { name: 'gil', label: 'GIL', type: 'number', min: 0, max: 200000 },
        { name: 'strength', label: 'Strength', defaultValue:"N/A" },
        { name: 'weakness', label: 'Weakness', defaultValue:"N/A" },
        { name: 'location', label: 'Location' },
        { name: 'level', label: 'Level', type: 'number', min: 0, max: 99},
        { name: 'drops', label: 'Drops', defaultValue:"N/A" },
        { name: 'steal', label: 'Steal', defaultValue:"N/A" },
        { name: 'enemy_skill', label:'Enemy Skill', defaultValue:"N/A" },
      ]

      return FIELDS.map(({ label, ...field }) => 
        <div key={field.name} className="input-w-label">
          <label htmlFor={field.name}>{label || field.name}</label>
          <input {...field} id={field.name} required onChange={this.handleInputChange} autoComplete="none" />
        </div>
      )
    }

  render () {
    return (
      <div className="add-monster-container">
      <h1>Add a new monster </h1>
        <form name="add-monster-form" id="add-monster-form" onSubmit={this.handleSubmitForm}>
        <div className='form-description'>
          All fields are required. If monster has no weakness/strength/drop/steal, simply put N/A as the value for that field.
        </div>
        <p className="form-description" > When you add a monster, the field "Added by" will be added to your monster with your username.</p>
          <button type="reset" onClick={this.handleCancelForm}>Not Interested</button>
        <div className="all-the-inputs">
          {this.renderInputs()}
        </div>

          {this.state.message 
          ? <p id="message">{this.state.message}</p>
          : '' }
          <button type="submit">OK, add it</button>
          <button type="reset" onClick={this.handleCancelForm}>Not Interested</button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddMonsterForm)

