import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
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
        <button className="login-button"
          onClick={this.handleRegister}>
          Register 
        </button>
        <button className="login-button"
          onClick={this.handleLogin}>
          Login 
        </button>
        {this.state.login ? <LoginForm /> : ''}
        {this.state.register ? <RegisterForm /> : ''}
        
      </section>
    
    )
  }
}

export default LoginorRegister