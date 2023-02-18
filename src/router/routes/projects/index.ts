import { RouteRecordRaw } from 'vue-router';

export const ProjectsRoute: RouteRecordRaw = {
  path: '/projects/',
  name: 'projects',

  component: () => import(/* webpackChunkName: "projects" */ '@/views/ProjectsView.vue'),

  meta: {
    breadCrumbs: [
      {
        to: '/', // hyperlink
        text: 'Home', // crumb text
      },
      {
        to: '/projects', // hyperlink
        text: 'Projects', // crumb text
      },
    ],
  },
};
