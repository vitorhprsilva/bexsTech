import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost/api"
  });

  api.defaults.headers['Content-type'] = 'application/json; charset=utf-8'

  export default api;