import config from '../config'
import TokenService from '../services/token-service'

const MonsterApiService = {
  getMonsters() {
    return fetch(`${config.API_ENDPOINT}/monsters`, { 
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getMonsterById(id) {
    return fetch(`${config.API_ENDPOINT}/monsters/${id}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok) 
          ? res.json.then(e => Promise.reject(e))
          : res.json()
      )
  },

  getUserGuides(user_id) {
    return fetch(`${config.API_ENDPOINT}/guides/${user_id}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
  },

  postGuide(user_id, name, note) {
    return fetch(`${config.API_ENDPOINT}/guides/${user_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_id: user_id,
        name: name,
        note: note
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  postMonster(user_name, monster) {
    return fetch(`${config.API_ENDPOINT}/monsters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_name,
        monster
      }),
    })
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  }
}

export default MonsterApiService