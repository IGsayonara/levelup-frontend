import { RouteRecordRaw } from 'vue-router';

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue'),
};
