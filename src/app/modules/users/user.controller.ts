import { RequestHandler } from 'express'
import { UserService } from './user.services'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createUser(req.body.user)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}
