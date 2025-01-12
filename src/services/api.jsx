import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // Base URL da API Reqres.in
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;