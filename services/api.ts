import axios from "axios";

let urls = {
  test: `http://localhost:3001`,
  development: "http://localhost:3000/",
  production: "https://your-production-url.com/",
};
const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
