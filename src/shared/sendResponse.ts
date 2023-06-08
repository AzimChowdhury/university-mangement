import { Response } from 'express';

type IApiResponse<T> = {
  // statusCode: number | null;
  success: boolean;
  message?: string | null;
  data: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    // statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  };

  res.status(200).json(responseData);
};

export default sendResponse;
