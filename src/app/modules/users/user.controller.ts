import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.createUser(req.body.user);

    sendResponse(res, {
      statusCode: httpStatus.ok,
      success: true,
      message: 'user created successfully',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
