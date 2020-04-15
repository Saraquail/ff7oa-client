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
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  }
  // hasGuestToken() {
  //   let token = TokenService.getAuthToken()

  //   if (token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1ODY5NjI2NzQsInN1YiI6Imd1ZXN0In0.M8K8zjjUiWYp_RVNabqdc02nC-KauIRRU_h9ND9hL0E'){

  //   }
  // }
}

export default TokenService
