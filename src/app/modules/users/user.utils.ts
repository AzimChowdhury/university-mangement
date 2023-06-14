import { IAS } from '../academicSemester/as.interface';
import { User } from './user.model';

export const findLastStudentID = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

export const generateStudentID = async (as: IAS | null) => {
  const currentId =
    (await findLastStudentID()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `${as?.year.substring(2)}${as?.code}${incrementedId}`;
  return incrementedId;
  // console.log(incrementedId);
  //   lastUserId++
  //   return String(lastUserId).padStart(5, '0')
};

export const findLastFacultyID = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyID()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `F-${incrementedId}`;
  return incrementedId;
};
