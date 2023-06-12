import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ASValidation } from './as.validation';
import { ASController } from './as.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(ASValidation.createASZodSchema),
  ASController.createSemester
);
router.patch(
  '/:id',
  validateRequest(ASValidation.updateASZodSchema),
  ASController.updateSemester
);
router.delete('/:id', ASController.deleteSemester);

router.get('/:id', ASController.getSingleSemester);
router.get('/', ASController.getAllSemesters);

export const SemesterRoute = router;
