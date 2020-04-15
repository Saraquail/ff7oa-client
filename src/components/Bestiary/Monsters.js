import React, { Component } from 'react'

class Monsters extends Component {
  state = {
    showModal: false
  }

  handleExpand = () => {
    console.log('expand')
    //add click here to show ${more/less}
  }

  // handleOpenModal = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }

  // handleCloseModal = () => {
  //   this.setState({
  //     showModal: false
  //   })
  // }


  render () {
    const mon = this.props

    if(!mon) {
      return <p>Loading Monsters</p>
    }
    return (
      <section className="monsterList">

        <div className="collapsed">    
          <h2>{mon.name}</h2>
          <button> Add to My PHS</button>
          <button> Click here for more info</button>
          <p> Level: {mon.level} </p>
          <p> Added By: {mon.user_name} </p>
          <p> HP: {mon.hp} MP: {mon.mp} </p>
          <p> Exp: {mon.exp} Gil: {mon.gil} </p>
          <p> Strength: {mon.strength}</p>
          <p> Weakness: {mon.weakness}</p>
        </div>
        <div className="expanded">
          <p> Location: {mon.location} </p>
          <p> Steal: {mon.steal} </p>
          <p> Drop: {mon.drops} </p>
          <p> Enemy_skill: {mon.enemy_skill} </p>
        </div>

      </section>

    )
    

  }
}

export default Monsters