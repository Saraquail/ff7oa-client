import React, { Component } from 'react'
import MonsterApiService from '../../services/monster-api-service'
import TokenService from '../../services/token-service'
import SaveGuideForm from '../SaveGuideForm/SaveGuideForm'

class Monsters extends Component {
  state = {
    showModal: false,
    selectedid: ''
  }

  handleExpand = () => {
    console.log('expand')
    //add click here to show ${more/less}
  }

  handleOpenModal = (e) => {
    console.log(e)
    this.setState({
      showModal: true,
      selectedid: e
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleAddGuide = (e) => {
    const user_name = TokenService.getUserName()
    //MonsterApiService.postGuide()
  }

  // renderSaveGuideForm = () =>{

  //   return (
  //     <SaveGuideForm>
  //       <div>
  //         <form name="add-guide" onSubmit={this.handleSubmit}>
  //           <label htmlFor="save-item-title">Nickname</label>
  //             <input type="text" name="save-item-title" id="save-item-title"/>
  //           <label htmlFor="save-item-note">Note</label>
  //             <input type="text" name="save-item-note" id="save-item-note"/>
  //           <button onClick={this.handleCloseModal}>Not Interested</button>
  //           <button onClick={this.handleAddGuide}>OK, add it</button>
  //         </form>
  //       </div>
  //     </SaveGuideForm>
      
  //   )
  // }

    // onClick={(e) => this.handleInput(e,'value')}

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
            onClick={e => this.handleOpenModal(e, value)}
            > Add to My PHS</button>
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
      {this.state.showModal ? 
      
        <SaveGuideForm selectedid={id} handleCloseModal={this.handleCloseModal} />
        
        
        : ''}
      </section>

    )
    

  }
}

export default Monsters