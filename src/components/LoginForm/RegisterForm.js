import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginForm.css'

class RegisterForm extends Component {
  state ={
    passwordMessage: '',
    loadingMessage: '',
    error: ''
  }

  handleSubmitRegisterJWT = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target
    this.setState({
      loadingMessage: 'Loading, please wait'
    })

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => { 
        this.onRegistrationSuccess(user_name.value, password.value)
        user_name.value = ''
        password.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  onRegistrationSuccess = (user_name, password) => {
    AuthApiService.postLogin({
      user_name: user_name,
      password: password
    })
    .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserName(res.user_name)
        this.props.history.push('/bestiary')

      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handlePassword = ev => {
    let str = ev.target.value
    if(str) {
      this.setState({
          passwordMessage: this.validatePassword(str)
      })
    }
  }

validatePassword(str) {
  if (str.length === 0) {
    return 'Password is required'
  } 
  else if (str.length < 6 || str.length > 72) {
    return 'Password must be between 6 and 72 characters'
  } 
  else if (!str.match(/[0-9]/)) {
    return 'Password must contain at least one number'
  } 
  else if (!str.match(/^[a-z]/)) {
    return 'Password must contain at least one lowercase letter'
  }
  else if (!str.match(/(?=.*[A-Z])/)) {
    return 'Password must contain at least one uppercase letter'
  }
  else {
    return ''
  }
}



  render () {

    return (
      <div className="register-container">
        <h2>Register a new account:</h2>
        <form 
          className="register-form"
          onSubmit={this.handleSubmitRegisterJWT}
        > <p className="password-instructions">Your password must be longer than 6 characters, and include at least one of the following: lowercase letter, uppercase letter number. </p>
          <label htmlFor="user_name">Username</label>
            <input type="text" name="user_name" id="user_name" required="" />
          <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required="" onChange={this.handlePassword}/>
            <p className="message">
              {this.state.passwordMessage}
              {this.state.loadingMessage}
              {this.state.error}
            </p>
          <button 
            type="submit">
              Let's Mosey
          </button>
          </form>
      </div>
    )
  }
}

export default withRouter(RegisterForm)