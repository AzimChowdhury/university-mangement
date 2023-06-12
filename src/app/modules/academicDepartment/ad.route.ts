import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ADController } from './ad.controller';
import { ADValidation } from './ad.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(ADValidation.createAcademicDepartmentZodSchema),
  ADController.createDepartment
);

router.get('/:id', ADController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(ADValidation.updateAcademicDepartmentZodSchema),
  ADController.updateDepartment
);

router.delete('/:id', ADController.deleteDepartment);

router.get('/', ADController.getAllDepartments);

export const DepartmentRoutes = router;
