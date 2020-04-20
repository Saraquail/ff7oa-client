import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import MonsterApiService from '../../services/monster-api-service'
import TokenService from '../../services/token-service'
import Guides from './Guides'
import './PHS.css'


class PHS extends Component {
  state = {
    guides: []
  }

  componentDidMount() {
    const user_name = TokenService.getUserName()
    
    MonsterApiService.getUserGuides(user_name)
      .then(data => {
        this.setState({
          guides: data
        })
      })
      .catch()
  }

  renderGuides() {
    let guides = this.state.guides

    return guides.map(guide => 
      <Guides
        monster_id={guide.monster_id}
        key={guide.id}
        name={guide.name}
        note={guide.note}
      />
      )
  }

  render() {

    return (
      <div>
        <Nav></Nav>
        <h1>My PHS</h1>
        <p>In FF7, your PHS is your Personal Handheld System. This is basically a cellphone you can use to interact with your party members. Here, your PHS is a list of monsters you've saved for quick reference. </p>
        <h2>My Saved Guides:</h2>
        {this.renderGuides()}
      </div>
    )
  }
}

export default PHS