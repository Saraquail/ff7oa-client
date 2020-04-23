import React, { Component } from 'react'
import SingleItemView from '../SingleItemView/SingleItemView'
import TokenService from '../../services/token-service'
import MonsterApiService from '../../services/monster-api-service'
import { withRouter } from 'react-router-dom'
import './Guides.css'

class Guides extends Component {
  state = {
    showMon: false,
    monster_id: '',
    message: '',
    guides: this.props
  }

  handleClick = ev => {
    let id = ev.target.value
    this.setState(prevState => ({
      showMon: !prevState.showMon,
      monster_id: id
    }))
  }

  handleDelete = ev => {
    let guide_id = ev.target.value
    let user_name = TokenService.getUserName()

    MonsterApiService.deleteGuide(user_name, guide_id)
      .then(this.props.deleteGuide(guide_id))
      .catch(e => this.setState({ message: e.error }))
  }

  render () {
    const guides = this.props

    if(!guides) {
      return <p>Loading Guides</p>
    }
    return(
      <section className="guides">
        <div className="guides-list">
          <h3 className="guide-name" id={guides.monster_id}>name: {guides.name}</h3>
          <p className="guide-note" >note: {guides.note}</p>
          <button value={guides.id} 
          onClick={(ev) => this.handleDelete(ev)}>
            Delete
          </button>
          <button value={guides.monster_id} 
          onClick={(ev) => this.handleClick(ev)}>
          {this.state.showMon ? 'Close' : 'Open Below' } 
          </button>
        </div>
        {this.state.showMon 
        ? <SingleItemView monster_id={this.state.monster_id} /> 
        : ''}
      </section>
    )
  }
}

export default withRouter(Guides)