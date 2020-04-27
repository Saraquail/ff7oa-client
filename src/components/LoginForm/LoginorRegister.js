import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class LoginorRegister extends Component {
  state = {
    login: false,
    register: false,
  }

  handleLogin = () => {
    this.setState({
      login: true,
      register: false,
    });
  }

  handleRegister = () => {
    this.setState({
      register: true,
      login: false,
    });
  }

  render() {
    const { login, register } = this.state;
    return (
      <section className="LoginOrRegister">
        <div>
          <Link to="/bestiary">
            <button type="button">Continue as a guest</button>
          </Link>
        </div>
        <HashLink to="#register-header">
          <button
            type="button"
            className="login-button"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </HashLink>
        <HashLink to="#login-header">
          <button
            type="button"
            className="login-button"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </HashLink>
        {login ? <LoginForm /> : ''}
        {register ? <RegisterForm /> : ''}
      </section>
    );
  }
}

export default LoginorRegister;
