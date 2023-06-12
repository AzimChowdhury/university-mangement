import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { adSearchableFields } from './ad.constants';
import { IAD, IADFilters } from './ad.interface';
import { AD } from './ad.model';

const getAllDepartments = async (
  filters: IADFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAD[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: adSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
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

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AD.find(whereConditions)
    .populate('academicFaculty')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AD.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createDepartment = async (payload: IAD): Promise<IAD | null> => {
  const result = (await AD.create(payload)).populate('academicFaculty');
  return result;
};

const getSingleDepartment = async (id: string): Promise<IAD | null> => {
  const result = await AD.findById(id).populate('academicFaculty');
  return result;
};

const updateDepartment = async (
  id: string,
  payload: Partial<IAD>
): Promise<IAD | null> => {
  const result = await AD.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate('academicFaculty');
  return result;
};

const deleteDepartment = async (id: string): Promise<IAD | null> => {
  const result = await AD.findByIdAndDelete(id);
  return result;
};

export const ADServices = {
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment,
};
