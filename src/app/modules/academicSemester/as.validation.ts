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

const updateASZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...asTitle] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z.string({ required_error: 'year is required' }).optional(),
      code: z.enum([...asCodes] as [string, ...string[]]).optional(),
      startMonth: z
        .enum([...asMonths] as [string, ...string[]], {
          required_error: 'end month is required',
        })
        .optional(),
      endMonth: z
        .enum([...asMonths] as [string, ...string[]], {
          required_error: 'end month is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );
//   await createUserZodSchema.parseAsync(req)
export const ASValidation = { createASZodSchema, updateASZodSchema };
