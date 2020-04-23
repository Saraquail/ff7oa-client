import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import SaveGuideForm from '../SaveGuideForm/SaveGuideForm'
import './Monsters.css'

class Monsters extends Component {
  state = {
    showModal: false,
    selectedid: '',
    expanded: false,
    sort: ''
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

  renderAllMons = () => {

    const mon = this.props
    let id = this.state.selectedid
    if(!mon) {
      return <p>Loading Monsters</p>
    }

    return(
      <section className="monsterList" >
        <div className="monster">
          <div className="collapsed">    
            <h2 id={mon.id}>{mon.name}</h2>
            <button value={mon.id}
              onClick={e => this.handleOpenModal(e)}
              > Add to My PHS</button>
            <Link to={'#' + mon.id} id="expand">
              <button id="expand" onClick={this.handleExpand}>
              Click for more/less info
              </button>
            </Link> 
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
        </div>
      {this.state.showModal ?
        <SaveGuideForm className="modal overlay"  selectedid={id} handleCloseModal={this.handleCloseModal}   onRequestClose={this.handleCloseModal}
        />
      : ''}
      </section>

    )
  }


  render () {

    return (
      <div>
      
      {this.renderAllMons()}
      </div>
    )
    

  }
}

export default Monsters