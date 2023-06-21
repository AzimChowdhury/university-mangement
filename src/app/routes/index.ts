import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { SemesterRoute } from '../modules/academicSemester/as.route';
import { AFacultyRoutes } from '../modules/academicFaculty/af.route';
import { DepartmentRoutes } from '../modules/academicDepartment/ad.route';
import { StudentRoutes } from '../modules/student/student.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/md.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
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
    route: AFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: DepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

// Application route
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
