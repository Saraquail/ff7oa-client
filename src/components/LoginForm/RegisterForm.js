import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import { withRouter } from 'react-router-dom';


class RegisterForm extends Component {

  handleSubmitRegisterJWT = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => { 
        debugger
        this.onRegistrationSuccess(user_name.value, password.value)
        

        //need a function that sends user to bestiary
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
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
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
          <input type="text" name="user_name" id="user_name" required="" defaultValue="guest" />
        <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required="" defaultValue="guest" />
        <button 
          type="submit">
            Let's Mosey
        </button>
      </form>
    )
  }
}

export default withRouter(RegisterForm)