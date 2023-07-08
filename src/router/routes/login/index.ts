import { RouteRecordRaw } from 'vue-router';

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () =>
    import(/* webpackChunkName: "Login" */ '@/views/LoginView.vue'),
};
