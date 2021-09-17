import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-2caa0/us-central1/api'
  // the API (CLOUD FUNCTION)url
});

export default instance;