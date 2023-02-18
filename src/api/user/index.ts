import axios from '@/api/index';

export const loadCurrentUser = async () => {
  return await axios.get('/users/me').then((r) => r.data);
};
