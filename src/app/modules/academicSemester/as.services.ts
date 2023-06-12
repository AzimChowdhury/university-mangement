import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { asSearchableFields, asTitleCodeMapper } from './as.consantst';
import { IAS, IASFilters } from './as.interface';
import { AS } from './as.model';
import httpStatus from 'http-status';
import { ObjectId } from 'mongodb';

const createSemester = async (payload: IAS): Promise<IAS> => {
  if (asTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await AS.create(payload);
  return result;
};

const getAllSemester = async (
  filters: IASFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAS[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: asSearchableFields.map(fields => ({
        [fields]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AS.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await AS.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleSemester = async (id: string): Promise<IAS | null> => {
  const result = AS.findById(id);
  return result;
};

const updateSemester = async (
  id: string,
  payload: Partial<IAS>
): Promise<IAS | null> => {
  if (
    payload.title &&
    payload.code &&
    asTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = AS.findOneAndUpdate({ _id: id }, payload, { new: true });
  return result;
};

export const ASservice = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
};
