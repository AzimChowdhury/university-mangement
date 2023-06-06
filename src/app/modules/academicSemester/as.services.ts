import { IAS } from './as.interface'
import { AS } from './as.model'

const createSemester = async (payload: IAS): Promise<IAS> => {
  const result = await AS.create(payload)
  return result
}

export const ASservice = {
  createSemester,
}
