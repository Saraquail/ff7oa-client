import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
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
      <Link to="#register-header">
      <button className="login-button"
      onClick={this.handleRegister}>
      Register
      </button>
        </Link>
        <Link to="#login-header">
          <button className="login-button"
            onClick={this.handleLogin}>
            Login
          </button>
        </Link>
        {this.state.login ? <LoginForm /> : ''}
        {this.state.register ? <RegisterForm /> : ''}
      </section>
    
    )
  }
}

export default LoginorRegister