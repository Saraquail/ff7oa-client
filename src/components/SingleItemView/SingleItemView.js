import React, { Component } from 'react'
import MonsterApiService from '../../services/monster-api-service'

class SingleItemView extends Component {
  state = {
    mon: {}
  }


  componentDidMount() {
    this.getItem()
  }

  getItem =() => {
    let id = this.props.monster_id
    MonsterApiService.getMonsterById(id)
      .then(data => 
        this.setState({ mon: data })
        )
  }

  renderMonster = () => {
    let mon = this.state.mon
    
    return (
      <div className="singleMonster">
        <h2>{mon.name}</h2>
        <p> Level: {mon.level} </p>
        <p> Added By: {mon.user_name} </p>
        <p> HP: {mon.hp} MP: {mon.mp} </p>
        <p> Exp: {mon.exp} Gil: {mon.gil} </p>
        <p> Strength: {mon.strength}</p>
        <p> Weakness: {mon.weakness}</p>
        <p> Location: {mon.location} </p>
        <p> Steal: {mon.steal} </p>
        <p> Drop: {mon.drops} </p>
        <p> Enemy_skill: {mon.enemy_skill} </p>
      </div>
    )
  }

  render () {
    return (
      <div>
      {this.renderMonster()}
      </div>
    )
  }

}

export default SingleItemView