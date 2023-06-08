import { ICode, IMonth, ITitle } from './as.interface';

export const asMonths: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const asTitle: ITitle[] = ['Autumn', 'Summer', 'Fall'];
export const asCodes: ICode[] = ['01', '02', '03'];
export const asTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
