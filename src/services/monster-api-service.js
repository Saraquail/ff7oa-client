import config from '../config'

const MonsterApiService = {
  getMonsters() {
    return fetch(`${config.API_ENDPOINT}/monsters` 
      // headers: {
      //   'Authorization': `Bearer ${}`
      // }
    )
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  }
}

export default MonsterApiService