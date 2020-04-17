import React, { Component } from 'react'
import SingleItemView from '../SingleItemView/SingleItemView'


class Guides extends Component {
  state = {
    showModal: false,
    monster_id: ''
  }

  handleClick = ev => {
    let id = ev.target.value
    console.log(id)
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      monster_id: id
    }))
  }

  // renderSingleItem = () => {
  //   return 
  // }

  render () {
    const guides = this.props
    if(!guides) {
      return <p>Loading Guides</p>
    }
    return(
      <div className="guides-list">
        <h3>name: {guides.name}</h3>
        <p>note: {guides.note}</p>
        <button value={guides.monster_id} onClick={(ev) => this.handleClick(ev)}>
        {this.state.showModal ? 'Close' : 'Open' }
        </button>
        {this.state.showModal 
        ? <SingleItemView monster_id={this.state.monster_id} /> 
        : ''}
      </div>
    )
  }
}

export default Guides