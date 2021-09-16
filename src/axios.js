import axios from 'axios';

const instance = axios.create({
  baseURL: ''// the API (CLOUD FUNCTION)url
  
});

export { instance };