import { NextFunction, Request, Response } from 'express';
import { ASservice } from './as.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...asData } = req.body;
    const result = await ASservice.createSemester(asData);
    // next();

    sendResponse(res, {
      // statusCode: httpStatus.ok,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  }
);

export const ASController = {
  createSemester,
};
