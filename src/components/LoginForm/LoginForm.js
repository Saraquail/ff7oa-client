import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import { withRouter } from 'react-router-dom';
import './LoginForm.css'

class LoginForm extends Component {
  state ={
    loadingMessage: '',
    error: ''
  }

  handleSubmitLoginJWT = ev => {    
    ev.preventDefault()
    const { user_name, password } = ev.target
    this.setState({
      loadingMessage: 'Loading, please wait'
    })

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
        this.setState({ 
          loadingMessage: '',
          error: res.error })
      })
  }

  render () {
    return (
      <div className="login-container">
        <h2 id="login-header">Login to an existing or guest account:</h2>
        <form 
          className="login-form"
          onSubmit={this.handleSubmitLoginJWT}>
          <p className="onboarding">If you'd like to sign in as a guest, simply hit Login, and then Let's Mosey without changing the text in the fields.</p>
          <label htmlFor="user_name">Username</label>
            <input type="text" name="user_name" id="user_name" required="" defaultValue="guest" />
          <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required="" defaultValue="guest" />
            <p className="message">
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

export default withRouter(LoginForm)