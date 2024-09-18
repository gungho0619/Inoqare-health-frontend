import axios from "../axios";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.data);

export default fetcher;
