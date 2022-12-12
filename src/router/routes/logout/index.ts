import { RouteRecordRaw } from 'vue-router';

export const LogoutRoute: RouteRecordRaw = {
  path: '/logout',
  name: 'Logout',
  beforeEnter: () => {
    localStorage.removeItem('jwe_token');
    return '/login';
  },
  component: {},
};
