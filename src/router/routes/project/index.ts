import { RouteRecordRaw } from 'vue-router';
import { getValidatedId } from '@/utils/id-util';
import { idGuard } from '@/router/middlewares/correctParams';

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

      beforeEnter: idGuard,

      component: () => import(/* webpackChunkName: "project" */ '@/views/ProjectView.vue'),
    },
  ],
};
