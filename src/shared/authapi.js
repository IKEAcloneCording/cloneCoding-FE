import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: '보류',
    'Refresh-Token': '보류',
  },
});

export default instance;
