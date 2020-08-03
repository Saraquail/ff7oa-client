import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LoginForm.css';

class LoginForm extends Component {
  state ={
    message: '',
  }

  handleSubmitLoginJWT = (ev) => {
    ev.preventDefault();
    const { history } = this.props;
    const { user_name, password } = ev.target;
    this.setState({
      message: 'Loading, please wait',
    });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        history.push('/');
      })
      .catch((res) => {
        this.setState({ message: res.error });
      });
  }

  render() {
    const { message } = this.state;
    return (
      <div className="login-container">
        <h2 id="login-header">Login to an existing or guest account:</h2>
        <p className="onboarding">If you sign in as a test user, you can test out the add monsters and PHS features, but they will be cleared periodically.</p>
        <p className="onboarding">If you’d like to log in as a test user, simply hit Let’s Mosey without changing the text in the fields.</p>
        <form
          className="login-form"
          onSubmit={this.handleSubmitLoginJWT}
        >
          <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required="" defaultValue="test" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required="" defaultValue="testuser" />
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

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(LoginForm);
