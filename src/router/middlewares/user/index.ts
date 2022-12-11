import { NavigationGuard } from 'vue-router';
import { checkAuthPromise } from '@/utils/login-util';

export const isLoginGuard: NavigationGuard = async (to) => {
  const isLogin = await checkAuthPromise;
  if (to.path !== '/login') return (await isLogin()) ? true : '/login';
};
