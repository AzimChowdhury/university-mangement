import { Schema, model } from 'mongoose';
import { IAF, AFModel } from './af.interface';

const AFSchema = new Schema<IAF, AFModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AF = model<IAF, AFModel>('AcademicFaculty', AFSchema);
