import { HomeRoute } from '@/router/routes/home';
import { ProjectRoute } from '@/router/routes/project';
import { NotFoundRoute } from '@/router/routes/404';
import { LoginRoute } from '@/router/routes/login';
import { LogoutRoute } from '@/router/routes/logout';
import { SkillRoute } from '@/router/routes/skill';

export const routes = [
  HomeRoute,
  ProjectRoute,
  SkillRoute,
  LoginRoute,
  LogoutRoute,
  NotFoundRoute,
];
