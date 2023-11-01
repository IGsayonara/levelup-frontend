import axios from '@/api/index';

export const authLogin = async (username: string, password: string) => {
  return await axios.post('/auth/login', { username, password }).then((r) => {
    localStorage.setItem('jwt_token', r.data.access_token);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${r.data.access_token}`;
    return true;
  });
};
