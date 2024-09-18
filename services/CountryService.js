import axios from "../axios";

let token = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token')
}

export const fetchCountryList = (searchInfo) => {
  return axios
    .post('country/list', searchInfo, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
}

export const fetchCountrySmallList = (searchInfo) => {
  return axios
    .post('country/small_list', searchInfo, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
}

