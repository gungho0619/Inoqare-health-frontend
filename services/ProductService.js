import axios from "../axios";

let token = '';
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token')
}

export const fetchPrice = (searchInfo) => {
  return axios
    .post('product/price', searchInfo, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
}
