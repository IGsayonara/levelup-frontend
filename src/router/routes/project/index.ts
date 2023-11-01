import { RouteRecordRaw } from 'vue-router';
import { getValidatedId } from '@/utils/id-util';
import { idGuard } from '@/router/middlewares/correctParams';
import { computed } from 'vue';

import store from '@/store';

export const ProjectRoute: RouteRecordRaw = {
  path: '/project/:id',
  name: 'project',

  props: (route) => {
    return { id: getValidatedId(route.params.id) };
  },

  beforeEnter: idGuard,

  component: () =>
    import(/* webpackChunkName: "project" */ '@/views/ProjectView.vue'),

  meta: {
    breadCrumbs: [
      {
        to: '/',
        text: 'Home',
      },
      {
        to: '/projects',
        text: 'Projects',
      },
      {
        to: '/',
        text: () => {
          return computed(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return store?.state.ProjectModule.title;
          });
        },
      },
    ],
  },
};
