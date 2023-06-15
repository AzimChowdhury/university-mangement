import { Model, Types } from 'mongoose';
import { IAF } from '../academicFaculty/af.interface';
import { IStudent } from '../student/student.interface';

export type UserModel = Model<IUser, object>;

export type IUser = {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
};
