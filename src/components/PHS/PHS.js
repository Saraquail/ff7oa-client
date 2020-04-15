import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import MonsterApiService from '../../services/monster-api-service'


class PHS extends Component {
  state = {
    guides: []
  }

  componentDidMount() {
    MonsterApiService.getUserGuides(2)
      .then(data => {
        this.setState({
          guides: data
        })
      })
      .catch()
  }

  render() {

    let guides = this.state.guides
    console.log(guides)

    return (
      <div>
        <Nav></Nav>
        <p></p>
      </div>
    )
  }
}

export default PHS