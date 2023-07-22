import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
