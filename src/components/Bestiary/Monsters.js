import React, { Component } from 'react'
import SaveGuideForm from '../SaveGuideForm/SaveGuideForm'
import './Monsters.css'

class Monsters extends Component {
  state = {
    showModal: false,
    selectedid: '',
    expanded: false
  }

  handleExpand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }

  handleOpenModal = (e) => {
    let id = e.target.value
    this.setState({
      showModal: true,
      selectedid: id
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render () {
    const mon = this.props
    let id = this.state.selectedid
    if(!mon) {
      return <p>Loading Monsters</p>
    }
    return (
      <section className="monsterList">

        <div className="collapsed">    
          <h2>{mon.name}</h2>
          <button value={mon.id}
            onClick={e => this.handleOpenModal(e)}
            > Add to My PHS</button>
          <button onClick={this.handleExpand}> Click here for more/less info</button>
          <p> Level: {mon.level} </p>
          <p> Added By: {mon.user_name} </p>
          <p> HP: {mon.hp} MP: {mon.mp} </p>
          <p> Exp: {mon.exp} Gil: {mon.gil} </p>
          <p> Strength: {mon.strength}</p>
          <p> Weakness: {mon.weakness}</p>
        </div>
        {this.state.expanded 
          ? <div className="expanded">
            <p> Location: {mon.location} </p>
            <p> Steal: {mon.steal} </p>
            <p> Drop: {mon.drops} </p>
            <p> Enemy_skill: {mon.enemy_skill} </p>
          </div>
          : ''}

      {this.state.showModal ?
        <SaveGuideForm className="modal" overlayClassName="overlay" selectedid={id} handleCloseModal={this.handleCloseModal}   onRequestClose={this.handleCloseModal}
 />
      : ''}
      </section>

    )
    

  }
}

export default Monsters