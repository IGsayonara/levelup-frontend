import { HomeRoute } from '@/router/routes/home';
import { ProjectRoute } from '@/router/routes/project';
import { NotFoundRoute } from '@/router/routes/404';
import { LoginRoute } from '@/router/routes/login';

export const routes = [HomeRoute, ProjectRoute, LoginRoute, NotFoundRoute];
