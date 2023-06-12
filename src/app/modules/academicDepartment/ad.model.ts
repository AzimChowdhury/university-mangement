import { Schema, model } from 'mongoose';
import { ADModel, IAD } from './ad.interface';

const ADSchema = new Schema<IAD, ADModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AD = model<IAD, ADModel>('AcademicDepartment', ADSchema);
