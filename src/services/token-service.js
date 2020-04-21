import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
    window.localStorage.removeItem('user')

  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  saveUserName(user_name) { 
    window.localStorage.setItem('user', user_name)
  },
  getUserName() {
    return window.localStorage.getItem('user')
  }

}

export default TokenService
