import ApiError from '../../../errors/ApiError';
import { asTitleCodeMapper } from './as.consantst';
import { IAS } from './as.interface';
import { AS } from './as.model';
import httpStatus from 'http-status';

const createSemester = async (payload: IAS): Promise<IAS> => {
  if (asTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await AS.create(payload);
  return result;
};

export const ASservice = {
  createSemester,
};
