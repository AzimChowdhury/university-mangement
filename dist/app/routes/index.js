"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/users/user.route");
const as_route_1 = require("../modules/academicSemester/as.route");
const af_route_1 = require("../modules/academicFaculty/af.route");
const ad_route_1 = require("../modules/academicDepartment/ad.route");
const student_route_1 = require("../modules/student/student.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/academic-semesters',
        route: as_route_1.SemesterRoute,
    },
    {
        path: '/academic-faculties',
        route: af_route_1.FacultyRoutes,
    },
    {
        path: '/academic-departments',
        route: ad_route_1.DepartmentRoutes,
    },
    {
        path: '/students',
        route: student_route_1.StudentRoutes,
    },
];
// Application route
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
