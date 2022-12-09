import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getValidatedId, isIdValid } from '@/utils/id-util';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about/:id',
    name: 'about',
    props: (route) => {
      return { id: getValidatedId(route.params.id) };
    },

    beforeEnter: (to, _from, next) => {
      if (isIdValid(to.params.id)) {
        next();
      } else {
        next('/404');
      }
    },

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//TODO: add guards directory
