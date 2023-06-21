import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AFController } from './af.controller';
import { AFValidation } from './af.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AFValidation.createFacultyZodSchema),
  AFController.createFaculty
);

router.get('/:id', AFController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(AFValidation.updateFacultyZodSchema),
  AFController.updateFaculty
);

router.delete('/:id', AFController.deleteFaculty);

router.get('/', AFController.getAllFaculties);

export const AFacultyRoutes = router;
