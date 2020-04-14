import React, { Component } from 'react'

class Monsters extends Component {

  // componentDidMount() {
  //   const { monsters } = this.props
  //   console.log(this.props)
  // }


  render () {
    const monsters = this.props

    if(!monsters) {
      return <p>Loading Monsters</p>
    }
    return (
      <h2>
        {monsters.name}
      </h2>
    )
    

  }
}

export default Monsters