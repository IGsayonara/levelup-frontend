import { RouteRecordRaw } from 'vue-router';
import { getValidatedId } from '@/utils/id-util';
import { projectIdGuard } from '@/router/middlewares/correctParams';

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

      beforeEnter: projectIdGuard,

      component: () => import(/* webpackChunkName: "project" */ '@/views/ProjectView.vue'),
    },
  ],
};
