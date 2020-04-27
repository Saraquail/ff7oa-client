import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginForm.css';

class RegisterForm extends Component {
  state ={
    message: '',
  }

  handleSubmitRegisterJWT = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    this.setState({
      message: 'Loading, please wait',
    });

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then((/* user */) => {
        this.onRegistrationSuccess(user_name.value, password.value);
        user_name.value = '';
        password.value = '';
      })
      .catch((res) => {
        this.setState({ message: res.error });
      });
  }

  onRegistrationSuccess = (user_name, password) => {
    const { history } = this.props;
    AuthApiService.postLogin({
      user_name,
      password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserName(res.user_name);
        history.push('/bestiary');
      })
      .catch((res) => {
        this.setState({ message: res.error });
      });
  }

  handlePassword = (ev) => {
    const str = ev.target.value;
    if (str) {
      this.setState({
        message: this.validatePassword(str),
      });
    }
  }

  validatePassword = (str) => {
    if (str.length === 0) {
      return 'Password is required';
    }
    if (str.length < 6 || str.length > 72) {
      return 'Password must be between 6 and 72 characters';
    }
    if (!str.match(/(?=.*[0-9])/)) {
      return 'Password must contain at least one number';
    }
    if (!str.match(/(?=.*[a-z])/)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!str.match(/(?=.*[A-Z])/)) {
      return 'Password must contain at least one uppercase letter';
    }
    return '';
  }

  render() {
    const { message } = this.state;
    return (
      <div className="register-container">
        <h2 id="register-header">Register a new account:</h2>
        <form
          name="login-form"
          className="login-form"
          onSubmit={this.handleSubmitRegisterJWT}
        >
          {' '}
          <p className="password-instructions onboarding">Your password must be longer than 6 characters, and include at least one of the following: lowercase letter, uppercase letter number. </p>
          <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required="" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required="" onChange={this.handlePassword} />
          {message
            ? (
              <p id="message">
                {' '}
                {message}
                {' '}
              </p>
            )
            : ''}
          <button
            type="submit"
            className="lets-mosey"
          >
            Let’s Mosey
          </button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(RegisterForm);
