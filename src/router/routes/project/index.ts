import { RouteRecordRaw } from 'vue-router';
import { getValidatedId, isIdValid } from '@/utils/id-util';

export const ProjectRoute: RouteRecordRaw = {
  path: '/project',
  redirect: '/',
  children: [
    {
      path: '/project/:id',
      name: 'project',
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

      component: () => import(/* webpackChunkName: "project" */ '@/views/ProjectView.vue'),
    },
  ],
};
