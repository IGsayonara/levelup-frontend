import { isIdValid } from '@/utils/id-util';
import { NavigationGuard } from 'vue-router';

export const idGuard: NavigationGuard = (to) => {
  if (isIdValid(to.params.id)) {
    return true;
  } else {
    return { path: '/404', replace: true };
  }
};
