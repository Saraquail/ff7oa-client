import config from '../config';

const AuthApiService = {
  // login with existing user

  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  // create a new user
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => ((!res.ok)
        ? res.json()
          .then((e) => Promise.reject(e))
        : res.json()));
  },
};

export default AuthApiService;
