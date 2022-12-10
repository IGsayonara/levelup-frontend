import { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

export const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: HomeView,
};
