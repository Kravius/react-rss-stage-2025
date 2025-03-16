import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import userSchema from './userSchema';
import { redirect, useSubmit } from 'react-router';
import { useAppDispatch } from '@store/store';
import { nanoid } from 'nanoid';
import { putUserToStored } from '@components/user/UsersSlice';

export const action = async () => {
  return redirect('/');
};

type FormData = z.infer<typeof userSchema>;

const ControlForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const submit = useSubmit();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 18,
      email: '',
      passwords: '',
      passwordCheck: '',
      gender: '',
      country: '',
      terms: false,
      image: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = (user) => {
    // Handle the form data submission logic here (e.g., storing it or sending to an API)
    console.log('Form submitted successfully:', user);
    dispatch(putUserToStored({ userId: nanoid(4), user }));
    submit(user, { method: 'post' });
  };

  // Read file as base64 (for image upload)
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Map errors to simpler structure (string | undefined)
  const errorMessages = <T extends keyof FormData>(field: T) =>
    errors[field]?.message || '';

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {/* Name */}
        <div style={{ marginBottom: '10px' }}>
          <input
            {...control.register('name')}
            type="text"
            placeholder="Name"
            style={{ width: '100%', padding: '8px' }}
          />
          {errorMessages('name') && (
            <span style={{ color: 'red' }}>{errorMessages('name')}</span>
          )}
        </div>

        {/* Age */}
        <div style={{ marginBottom: '10px' }}>
          <input
            {...control.register('age')}
            type="number"
            placeholder="Age"
            style={{ width: '100%', padding: '8px' }}
          />
          {errorMessages('age') && (
            <span style={{ color: 'red' }}>{errorMessages('age')}</span>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '10px' }}>
          <input
            {...control.register('email')}
            type="email"
            placeholder="Email"
            style={{ width: '100%', padding: '8px' }}
          />
          {errorMessages('email') && (
            <span style={{ color: 'red' }}>{errorMessages('email')}</span>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '10px' }}>
          <input
            {...control.register('passwords')}
            type="password"
            placeholder="Password"
            style={{ width: '100%', padding: '8px' }}
          />
          {errorMessages('passwords') && (
            <span style={{ color: 'red' }}>{errorMessages('passwords')}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '10px' }}>
          <input
            {...control.register('passwordCheck')}
            type="password"
            placeholder="Confirm Password"
            style={{ width: '100%', padding: '8px' }}
          />
          {errorMessages('passwordCheck') && (
            <span style={{ color: 'red' }}>
              {errorMessages('passwordCheck')}
            </span>
          )}
        </div>

        {/* Gender */}
        <div style={{ marginBottom: '10px' }}>
          <select
            {...control.register('gender')}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errorMessages('gender') && (
            <span style={{ color: 'red' }}>{errorMessages('gender')}</span>
          )}
        </div>

        {/* Country */}
        <div style={{ marginBottom: '10px' }}>
          <select
            {...control.register('country')}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add other countries as needed */}
          </select>
          {errorMessages('country') && (
            <span style={{ color: 'red' }}>{errorMessages('country')}</span>
          )}
        </div>

        {/* Image Upload */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                readFileAsBase64(file).then((base64) => {
                  setValue('image', base64); // Use setValue here to update the image base64
                });
              }
            }}
          />
          {errorMessages('image') && (
            <span style={{ color: 'red' }}>{errorMessages('image')}</span>
          )}
        </div>

        {/* Terms and Conditions */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input {...control.register('terms')} type="checkbox" /> I accept
            the Terms and Conditions
          </label>
          {errorMessages('terms') && (
            <span style={{ color: 'red' }}>{errorMessages('terms')}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid} // Заблокировать, пока форма не валидна
          style={{
            padding: '10px',
            backgroundColor: !isValid ? 'gray' : 'blue', // Серый цвет, если кнопка заблокирована
            color: 'white',
            cursor: !isValid ? 'not-allowed' : 'pointer', // Курсор "запрещено" при блокировке
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlForm;
