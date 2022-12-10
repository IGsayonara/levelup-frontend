import { isIdValid } from '@/utils/id-util';
import { NavigationGuard } from 'vue-router';

export const projectIdGuard: NavigationGuard = (to, _from, next) => {
  if (isIdValid(to.params.id)) {
    next();
  } else {
    next('/404');
  }
};
