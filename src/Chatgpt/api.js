import axios from 'axios';

const API_URL = 'http://your-api-url.com/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout
};
