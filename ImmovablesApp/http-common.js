import axios from "axios";

export default axios.create({
  //baseURL: "http://192.168.0.24:3000/api",
  //baseURL: "http://192.168.25.3:3000/api",
  baseURL: "http://172.17.0.229:3000/api",
  headers: {    "Content-type": "application/json"
  }
});