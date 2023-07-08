import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` },
});
export default axiosInstance;
