import axios from 'axios';
import authInterceptor from './authInterceptor';
import errorInterceptor from './errorInterceptor';
import responseInterceptor from './responseInterceptor';

export const BASE_URL = ''

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
