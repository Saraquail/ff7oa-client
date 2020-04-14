import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import OptionsForm from '../OptionsForm/OptionsForm'
import MonsterApiService from '../../services/monster-api-service'
import Monsters from './Monsters'

class Bestiary extends Component {

  state = {
    monsters: []
  }

  componentDidMount() {
    MonsterApiService.getMonsters()
      .then (data => {
        this.setState({ monsters: data })
      })
      .catch()
  }

  renderMonsters() {
    const allMonsters = this.state.monsters
    console.log(allMonsters)

    return allMonsters.map(mon =>
      <Monsters
        key={mon.id}
        name={mon.name}
        hp={mon.hp}
        mp={mon.mp}
        exp={mon.exp}
        gil={mon.gil}
        weakness={mon.weakness}
        strength={mon.strength}
        location={mon.location}
        level={mon.level}
        steal={mon.steal}
        drops={mon.drops}
        enemy_skill={mon.enemy_skill}
        user_name={mon.user_name}
      />
    )
  }
  
  render() {
    // this.renderMonsters()
    return (
      <div>
        <Nav />
        <OptionsForm />
        <h1>Bestiary</h1>
          {this.renderMonsters()}
      </div>
    )
  }
}

export default Bestiary