import { RequestHandler } from 'express'
import { ASservice } from './as.services'

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...asData } = req.body
    const result = await ASservice.createSemester(asData)
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const ASController = {
  createSemester,
}
