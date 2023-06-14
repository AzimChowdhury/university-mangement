import mongoose from 'mongoose';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { AS } from '../academicSemester/as.model';
import { IStudent } from '../student/student.interface';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentID } from './user.utils';
import { Student } from '../student/student.model';
import httpStatus from 'http-status';

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_student_password as string;
  }

  // set role
  user.role = 'student';
  const as = await AS.findById(student.academicSemester);

  let newUserAllData = null;

  // generate student id
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const id = await generateStudentID(as);
    user.id = id;
    student.id = id;
    const newStudent = await Student.create([student], { session });
    if (!newStudent.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'failed to create student');
    }
    //  set student _id into user
    user.student = newStudent[0]._id;
    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'failed to create user');
    }
    newUserAllData = newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        { path: 'academicSemester' },
        { path: 'academicDepartment' },
        { path: 'academicFaculty' },
      ],
    });
  }

  return newUserAllData;
};

const getStudents = async (): Promise<IStudent[]> => {
  const result = await Student.find({}).populate([
    { path: 'academicFaculty' },
    { path: 'academicDepartment' },
    { path: 'academicSemester' },
  ]);
  return result;
};
export const UserService = {
  createStudent,
  getStudents,
};
