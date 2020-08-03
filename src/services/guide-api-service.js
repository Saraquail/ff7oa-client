import config from '../config';
import TokenService from './token-service';

const GuideApiService = {
  getUserGuides() {
    return fetch(`${config.API_ENDPOINT}/guides`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },

  postGuide(guide) {
    return fetch(`${config.API_ENDPOINT}/guides`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        guide,
      }),
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },

  deleteGuide(guide_id) {
    return fetch(`${config.API_ENDPOINT}/guides/${guide_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
};

export default GuideApiService;
