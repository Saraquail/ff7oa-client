import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import OptionsForm from '../OptionsForm/OptionsForm'
import MonsterApiService from '../../services/monster-api-service'
import Monsters from './Monsters'
import holy from '../../images/White_Materia.png'
import './Bestiary.css'

class Bestiary extends Component {
  state = {
    monsters: [],
    sort: '',
    param: '',
    message: ''
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
    if(!sort && !term) {
      allMonsters = this.state.monsters
    }

    if(sort) {
      allMonsters = this.renderSorted(sort)
    }

    if(term) {
      allMonsters = this.renderSearched(param, term)
    }

    if(!allMonsters) {
      return 'No Results Found'
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

    //if the user hits search without filling either field, returns all results
    if(!term || !param) {
      return allMonsters
    }

    if(term) {
      param = param.toLowerCase()
      term = term.toLowerCase()
      //iterates through the array of monsters
      for(let i=0; i < allMonsters.length; i++) {
        //searches for the key that matches the param (searchby) and then checks to see if the corresponding value matches the term (string input by user)
        for (let [key, value] of Object.entries(allMonsters[i])) {
          if(key === param && value.toLowerCase().includes(term)) {
            //returns any object that meets the above criteria
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

  //if the sort parameter is a string value, sorts alphabetically
  if(sortby === 'location' || sortby === 'name') {
      allMonsters.sort((a, b) => {
        return a[sortby] > b[sortby] ? 1 : a[sortby] < b[sortby] ? -1 : 0
    })
  }
  //if the sort parameter is a number value, sorts by number in descending order (the above returns ascending order)
  else if (sortby === 'gil' || sortby === 'exp') {
    allMonsters.sort((a, b) => {
      return a[sortby] < b[sortby] ? 1 : a[sortby] > b[sortby] ? -1 : 0
  })
  }

    return allMonsters
  }

  handleSort = ev => {
    let sort = ev.target.value
    this.setState({
      sort: sort
    })
  }

  handleReset = () => {
    this.setState({
      params: '',
      sort: ''
    })
    this.renderMonsters()
    document.getElementById("search-form").reset();

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
    return (
      <div>
        <Nav />
        <section className="bestiary">
          <OptionsForm requiredMessage={this.state.message} handleReset={this.handleReset} handleSort={this.handleSort} handleSearch={this.handleSearch} />
          <div className="page-title">
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-left" />
            <h1>Bestiary</h1>
            <img src={holy} alt="a pale green orb of holy materia from final fantasy 7" className="holy-right" />
          </div>
          {this.renderMonsters()}
        </section>
      </div>
    )
  }
}

export default Bestiary