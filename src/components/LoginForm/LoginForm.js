import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {

  handleSubmitLoginJWT = ev => {    
    ev.preventDefault()
    const { user_name, password } = ev.target
    
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
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
        className="login-form"
        onSubmit={this.handleSubmitLoginJWT}
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

export default withRouter(LoginForm)