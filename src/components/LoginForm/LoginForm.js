import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class LoginForm extends Component {

  render () {
    return(
      <form 
        className="login-form"
        onSubmit={this.props.handleSubmit}
      >
        <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required="" defaultValue="guest" />
        <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required="" defaultValue="guest" />
        <button 
          type="submit">
          <Link to='/bestiary'>
            Let's Mosey
          </Link>
        </button>
      </form>
    )
    
  }
}

export default LoginForm