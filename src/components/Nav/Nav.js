import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import TokenService from '../../services/token-service'

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  
  render() {
    return (
  <nav>
    <ul>
      <li>
        <Link to='/bestiary'>
          Bestiary
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

