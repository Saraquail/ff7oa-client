import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import OptionsForm from '../OptionsForm/OptionsForm'
import MonsterApiService from '../../services/monster-api-service'
import Monsters from './Monsters'

class Bestiary extends Component {
  state = {
    monsters: [],
    sort: '',
    param: ''
  }

  componentDidMount() {
    MonsterApiService.getMonsters()
      .then (data => {
        this.setState({ monsters: data })
      })
      .catch()
  }

  renderMonsters = () => {
    let { sort, param, term } = this.state    
    let allMonsters = this.state.monsters
    console.log(allMonsters)
    // if(!sort && !param) {
    //   allMonsters = this.state.monsters
    // }

    // if(sort) {
    //   allMonsters = this.renderSorted(sort)
    // }

    if(term) {
      allMonsters = this.renderSearched(param, term)
    }

    return allMonsters.map(mon =>
      <Monsters
        id={mon.id}
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

  renderSearched = (param, term) => {
    let allMonsters = this.state.monsters
    let mons = []

    if(!term || !param) {
      return allMonsters
    }

    if(term) {
      param = param.toLowerCase()
      console.log(param)

      for(let i=0; i < allMonsters.length; i++) {
        for (let [key, value] of Object.entries(allMonsters[i])) {
          if(key === param && value.includes(term)) {
            mons.push(allMonsters[i])
            return mons
          }
        }
      }
    }
  }


  renderSorted = (sort) => {
    let allMonsters = this.state.monsters
    let sortby = sort.toLowerCase()
    // if (sortby === 'Name' || sortby === 'Location') {
    //   allMonsters.sort((a, b) => {
    //       return a.sortby.toLowerCase() > b.sortby.toLowerCase() ? 1 : 
    //         a.sortby.toLowerCase() < b.sortby.toLowerCase() ? -1 : 0
    //     })
    // }

    return allMonsters
    // if (sort === 'Gil' || sort === 'EXP') {
    //   allMonsters
    //     .sort((a, b) => {
    //       return a['Rating'] < b['Rating'] ? 1 : 
    //         a['Rating'] > b['Rating'] ? -1 : 0
    //     })
    //   return allMonsters.sort()
    // }
  }

  handleSort = ev =>  {
    let sort = ev.target.value
    this.setState({
      sort: sort
    })
  }

  handleSearch = ev => {
    ev.preventDefault()
    let term = ev.target.search.value
    let param = ev.target['filter-by'].value
    this.setState({
      param: param,
      term: term
    })
  }

  render() {
    // this.renderMonsters()
    return (
      <div>
        <Nav />
        <OptionsForm handleSort={this.handleSort} handleSearch={this.handleSearch} />
        <h1>Bestiary</h1>
          {this.renderMonsters()}
      </div>
    )
  }
}

export default Bestiary