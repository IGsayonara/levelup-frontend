import { RouteRecordRaw } from 'vue-router';

export const NotFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)',
  name: 'NotFound',
  component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
};
