import { Model, Types } from 'mongoose';
import { IAF } from '../academicFaculty/af.interface';

export type IAD = {
  title: string;
  academicFaculty: Types.ObjectId | IAF;
};

export type ADModel = Model<IAD, Record<string, unknown>>;

export type IADFilters = {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
};
