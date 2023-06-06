import { Model } from 'mongoose'

export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type ITitle = 'Autumn' | 'Summer' | 'Fall'
export type ICode = '01' | '02' | '03'
export type IAS = {
  title: ITitle
  year: number
  code: ICode
  startMonth: IMonth
  endMonth: IMonth
}

export type ASModel = Model<IAS>
