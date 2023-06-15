"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASValidation = void 0;
const zod_1 = require("zod");
const as_constants_1 = require("./as.constants");
// request validation
const createASZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.enum([...as_constants_1.asTitle], {
            required_error: 'Title is required',
        }),
        year: zod_1.z.string({ required_error: 'year is required' }),
        code: zod_1.z.enum([...as_constants_1.asCodes]),
        startMonth: zod_1.z.enum([...as_constants_1.asMonths], {
            required_error: 'end month is required',
        }),
        endMonth: zod_1.z.enum([...as_constants_1.asMonths], {
            required_error: 'end month is required',
        }),
    }),
});
const updateASZodSchema = zod_1.z
    .object({
    body: zod_1.z.object({
        title: zod_1.z
            .enum([...as_constants_1.asTitle], {
            required_error: 'Title is required',
        })
            .optional(),
        year: zod_1.z.string({ required_error: 'year is required' }).optional(),
        code: zod_1.z.enum([...as_constants_1.asCodes]).optional(),
        startMonth: zod_1.z
            .enum([...as_constants_1.asMonths], {
            required_error: 'end month is required',
        })
            .optional(),
        endMonth: zod_1.z
            .enum([...as_constants_1.asMonths], {
            required_error: 'end month is required',
        })
            .optional(),
    }),
})
    .refine(data => (data.body.title && data.body.code) ||
    (!data.body.title && !data.body.code), {
    message: 'Either both title and code should be provided or neither',
});
//   await createUserZodSchema.parseAsync(req)
exports.ASValidation = { createASZodSchema, updateASZodSchema };
