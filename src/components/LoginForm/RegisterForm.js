import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'


class RegisterForm extends Component {

  handleSubmitRegisterJWT = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

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

  render () {

    return (
      <form 
        className="register-form"
        onSubmit={this.handleSubmitRegisterJWT}
      >
        <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required="" />
        <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required="" />
        <button 
          type="submit">
            Let's Mosey
        </button>
      </form>
    )
  }
}

export default withRouter(RegisterForm)