import { NextFunction, Request, Response } from 'express';
import { ASservice } from './as.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AS } from './as.model';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAS } from './as.interface';
import { asFilterableFields } from './as.constants';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...asData } = req.body;
    const result = await ASservice.createSemester(asData);

    sendResponse(res, {
      statusCode: httpStatus.ok,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, asFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await ASservice.getAllSemester(filters, paginationOptions);

    sendResponse<IAS[]>(res, {
      statusCode: httpStatus.ok,
      success: true,
      message: 'Semester retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await ASservice.getSingleSemester(id);

    sendResponse<IAS>(res, {
      statusCode: httpStatus.ok,
      success: true,
      message: 'Semester retrieved successfully!',
      data: result,
    });
  }
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await ASservice.updateSemester(id, updateData);

    sendResponse<IAS>(res, {
      statusCode: httpStatus.ok,
      success: true,
      message: 'Semester updated successfully!',
      data: result,
    });
  }
);
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ASservice.deleteSemester(id);

  sendResponse<IAS>(res, {
    statusCode: httpStatus.ok,
    success: true,
    message: 'Semester deleted successfully!',
    data: result,
  });
});

export const ASController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
