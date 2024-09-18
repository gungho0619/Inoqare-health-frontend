import axios from "axios";

const api = axios.create({
  // baseURL: "http://147.182.161.80:5000/api/v1",
  	// for production ...
  baseURL: "https://www.backend.inoqare.com/api/v1",  
	// // for development ...
  //baseURL: "http://localhost:5000/api/v1"
});

export default api;
