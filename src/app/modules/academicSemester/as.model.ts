import { Model, Schema, model } from 'mongoose'
import { IAS, ASModel } from './as.interface'
import { asCodes, asMonths, asTitle } from './as.consantst'

const asSchema = new Schema<IAS>(
  {
    title: {
      type: String,
      required: true,
      enum: asTitle,
    },
    year: {
      type: Number,
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
  }
)

export const as = model<IAS, ASModel>('asSchema', asSchema)
