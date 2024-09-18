import axios from "../axios";

let token = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token')
}

export const fetchCategoryList = (searchInfo) => {
  return axios
    .post('specialty/list', searchInfo, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
}
