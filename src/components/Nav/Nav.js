import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  handleLogoutClick = () => {
    console.log('click')
  }
  
  render() {
    return (
  <nav>
    <ul>
      <li>
        <Link to='/bestiary'>
          Besitary
        </Link>
      </li>
      <li>
        <Link to='/PHS'>
          My PHS
        </Link>
      </li>
      <li>
      <Link 
        onClick={this.handleLogoutClick} 
        to='/'>
        Logout
      </Link>
      </li>
    </ul>
  </nav>
    )
  }
}

export default Nav