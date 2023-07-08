import { RouteRecordRaw } from 'vue-router';
import { getValidatedId } from '@/utils/id-util';
import { idGuard } from '@/router/middlewares/correctParams';

export const SkillRoute: RouteRecordRaw = {
  path: '/skill',
  redirect: '/',
  children: [
    {
      path: '/skill/:id',
      name: 'skill',
      props: (route) => {
        return { id: getValidatedId(route.params.id) };
      },

      beforeEnter: idGuard,

      component: () =>
        import(/* webpackChunkName: "skill" */ '@/views/SkillView.vue'),
    },
  ],
};
