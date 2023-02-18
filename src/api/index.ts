import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` },
});
export default axiosInstance;
