import { NextFunction, Request, Response } from 'express'
import userServices from './user.services'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.createUser(req.body.user)
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
}
