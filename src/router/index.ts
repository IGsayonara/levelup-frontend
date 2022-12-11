import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes/routes';
import { isLoginGuard } from '@/router/middlewares/user';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach(isLoginGuard);
