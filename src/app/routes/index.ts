import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { SemesterRoute } from '../modules/academicSemester/as.route';
import { FacultyRoutes } from '../modules/academicFaculty/af.route';
import { DepartmentRoutes } from '../modules/academicDepartment/ad.route';
import { StudentRoutes } from '../modules/student/student.route';
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
  {
    path: '/academic-faculties',
    route: FacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: DepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

// Application route
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
