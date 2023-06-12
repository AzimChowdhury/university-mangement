import { Model, Schema, model } from 'mongoose';
import { IAS, ASModel } from './as.interface';
import { asCodes, asMonths, asTitle } from './as.constants';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const asSchema = new Schema<IAS>(
  {
    title: {
      type: String,
      required: true,
      enum: asTitle,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: asCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: asMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: asMonths,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// handling same year and same semester issue
asSchema.pre('save', async function (next) {
  const isExist = await AS.findOne({ title: this.title, year: this.year });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist.'
    );
  }
  next();
});

export const AS = model<IAS, ASModel>('academic-semester', asSchema);
