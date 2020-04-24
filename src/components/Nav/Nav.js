import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import summoning from '../../images/Summoning_Materia.png'
import command from '../../images/Command_Materia.png'
import magic from '../../images/Magic_Materia.png'
import complete from '../../images/Complete_Materia.png'
import support from '../../images/Support_Materia.png'
import './Nav.css'

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  render() {
    return (
      <nav>
        <div className="header-image-container">
            <img src={magic} alt="green orb of magic materia from final fantasy 7" className="materia-img" />
            <img src={complete} alt="purple orb of complete materia from final fantasy 7" className="materia-img" />
            <img src={command} alt="yellow orb of command materia from final fantasy 7" className="materia-img" />
            <img src={support} alt="blue orb of support materia from final fantasy 7" className="materia-img" />
            <img src={summoning} alt="red orb of summoning materia from final fantasy 7" className="materia-img" />
          </div>
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
          </li>          <li>
            <Link to='/Config'>
              Config
            </Link>
          </li>
          <li>
          <Link 
            onClick={this.handleLogoutClick} 
            to='/'>
            {TokenService.hasAuthToken() ? 'Logout' : 'Login' }
          </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav

