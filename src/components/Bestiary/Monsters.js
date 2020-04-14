import React, { Component } from 'react'

class Monsters extends Component {

  // componentDidMount() {
  //   const { monsters } = this.props
  //   console.log(this.props)
  // }

  handleExpand = () => {
    return
  }

  render () {
    const mon = this.props

    if(!mon) {
      return <p>Loading Monsters</p>
    }
    return (
      <section className="monsterList">
        <h2>{mon.name}</h2>
        <button onClick={this.handleExpand()}>Click here for more info</button>
        <div className="collapsed">
          <p> Level: {mon.level} </p>
          <p> Added By: {mon.user_name} </p>
          <p> HP: {mon.hp} MP: {mon.mp} </p>
          <p> Exp: {mon.exp} Gil: {mon.gil} </p>
          <p> Strength: {mon.strength}</p>
          <p> Weakness: {mon.weakness}</p>
        </div>
        <div className="expanded">
          <p> location: {mon.location} </p>
          <p> steal: {mon.steal} </p>
          <p> drop: {mon.drops} </p>
          <p> enemy_skill: {mon.enemy_skill} </p>
        </div>

      </section>

    )
    

  }
}

export default Monsters