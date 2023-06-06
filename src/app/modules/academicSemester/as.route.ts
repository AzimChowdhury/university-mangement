import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ASValidation } from './as.validation'
const router = express.Router()

router.post(
  '/create-user',
  validateRequest(ASValidation.createASZodSchema),
  UserController.createUser
)

export const UserRoutes = router
