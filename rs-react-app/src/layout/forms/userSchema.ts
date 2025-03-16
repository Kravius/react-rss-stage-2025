import { z } from 'zod';

export type errors = Record<string, string | undefined>;

export const userSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .regex(/^[A-Z][a-zA-Z]*$/, {
        message: 'Name must start with an uppercase letter',
      }),
    age: z
      .number()
      .int()
      .positive({ message: 'Age must be a positive number' })
      .min(0, { message: 'Age must be a positive number' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .min(1, { message: 'Email is required' }),
    passwords: z
      .string()
      .min(8, { message: 'Password should be at least 8 characters long' })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least 1 uppercase letter',
      })
      .regex(/[a-z]/, {
        message: 'Password must contain at least 1 lowercase letter',
      })
      .regex(/[0-9]/, { message: 'Password must contain at least 1 number' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Password must contain at least 1 special character',
      }),
    passwordCheck: z
      .string()
      .min(1, { message: 'Password confirmation is required' }),
    gender: z.string().min(1, { message: 'Please select gender' }),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
    image: z
      .string()
      .refine(
        (base64) =>
          base64.startsWith('data:image/jpeg;base64,') ||
          base64.startsWith('data:image/png;base64,'),
        'File must be a PNG or JPEG'
      )
      .refine((base64) => {
        // Рассчитываем размер файла, основываясь на длине строки base64
        const base64Length = base64.length - base64.indexOf(',') - 1; // Убираем префикс "data:image/..."
        const fileSizeInBytes = (base64Length * 3) / 4; // Рассчитываем размер в байтах
        return fileSizeInBytes <= 5_000_000; // Проверяем, что файл не больше 5MB
      }, 'File must be under 5MB'),
    country: z.string().min(1, { message: 'Please select a country' }),
  })
  // Валидация на уровне всей схемы, чтобы проверить совпадение паролей
  .superRefine(({ passwordCheck, passwords }, ctx) => {
    if (passwordCheck !== passwords) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['passwordCheck'],
      });
    }
  });

export default userSchema;
