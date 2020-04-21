import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class LoginorRegister extends Component {
  state = {
    login: false,
    register: false
  }

  handleLogin = ev => {
    this.setState({
      login: true,
      register: false
    })
  }

  handleRegister = ev => {
    this.setState({
      register: true,
      login: false
    })
  }

  render () {
    return(
      <section className="LoginOrRegister">
        <div>
        <Link to="/bestiary">
          <button>Continue as a guest</button>
        </Link>
        </div>
        <HashLink to="#register-header">
        <button className="login-button"
        onClick={this.handleRegister}>
        Register
        </button>
        </HashLink>
        <HashLink to="#login-header">
          <button className="login-button"
            onClick={this.handleLogin}>
            Login
          </button>
        </HashLink>
        {this.state.login ? <LoginForm /> : ''}
        {this.state.register ? <RegisterForm /> : ''}
      </section>
    
    )
  }
}

export default LoginorRegister