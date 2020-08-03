import config from '../config';
import TokenService from './token-service';

const WeaponApiService = {
  getWeapons() {
    return fetch(`${config.API_ENDPOINT}/weapons`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
};

export default WeaponApiService;