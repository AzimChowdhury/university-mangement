import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { SemesterRoute } from '../modules/academicSemester/as.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: SemesterRoute,
  },
];

// Application route
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
