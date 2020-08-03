import config from '../config';
import TokenService from './token-service';

const MateriaApiService = {
  getMateria() {
    return fetch(`${config.API_ENDPOINT}/materia`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
};

export default MateriaApiService;
