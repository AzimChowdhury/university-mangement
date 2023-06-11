import { z } from 'zod';
import { asCodes, asMonths, asTitle } from './as.consantst';

// request validation
const createASZodSchema = z.object({
  body: z.object({
    title: z.enum([...asTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string({ required_error: 'year is required' }),
    code: z.enum([...asCodes] as [string, ...string[]]),
    startMonth: z.enum([...asMonths] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
    endMonth: z.enum([...asMonths] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
});
//   await createUserZodSchema.parseAsync(req)
export const ASValidation = { createASZodSchema };
