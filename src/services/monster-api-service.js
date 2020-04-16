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

  getUserGuides(user_name) {
    return fetch(`${config.API_ENDPOINT}/guides/${user_name}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },

  postGuide(user_name, name, note, monid) {
    return fetch(`${config.API_ENDPOINT}/guides/${user_name}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_name: user_name,
        name: name,
        note: note,
        mon_id: monid
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