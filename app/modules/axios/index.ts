import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://ergast.com/api',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);
