import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { REACT_APP_API_URL } = getEnvVariables();

const generacionApi = axios.create({
  baseURL: REACT_APP_API_URL,
});

//TO DO: CONFIGURE INTERCEPTORS
generacionApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  };
  return config;
});

export default generacionApi;
