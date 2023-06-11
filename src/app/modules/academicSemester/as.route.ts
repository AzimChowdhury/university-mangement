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
router.get('/:id', ASController.getSingleSemester);
router.get('/', ASController.getAllSemesters);

export const SemesterRoute = router;
