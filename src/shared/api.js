import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://',
  headers:{
    'Content-Type': 'application/json; charset=utf-8',
  }
});

export default instance;
