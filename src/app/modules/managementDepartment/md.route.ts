import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MDController } from './md.controller';
import { ManagementDepartmentValidation } from './md.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  MDController.createDepartment
);

router.get('/:id', MDController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema
  ),
  MDController.updateDepartment
);

router.delete('/:id', MDController.deleteDepartment);

router.get('/', MDController.getAllDepartments);

export const ManagementDepartmentRoutes = router;
