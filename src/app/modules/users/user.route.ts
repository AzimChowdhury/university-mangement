import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
);
router.get('/students', UserController.getStudents);

export const UserRoutes = router;
