import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes/routes';
import { isLoginGuard } from '@/router/middlewares/user';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

router.beforeEach(isLoginGuard);
