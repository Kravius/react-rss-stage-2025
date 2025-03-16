import CreateBtnLink from '@components/button/linkFormBtn/CreateBtnLink';
import styles from './Forms.module.css';
import { useRef, useState } from 'react';
import { Form, redirect, useSubmit } from 'react-router';
import InputForm from '@components/inputForm/inputForm';
import { useAppDispatch } from '@store/store';
import { putUserToStored, User } from '@components/user/UsersSlice';
import { nanoid } from 'nanoid';
import ImageUpload from '@components/inputForm/InputImageUpload';
import InputCountry from '@components/countries/Countries';
import InputGender from '@components/inputForm/InputGender';
import userSchema from './userSchema';
import { ZodError } from 'zod';

export const action = async () => {
  return redirect('/');
};

const UnControlForms: React.FC = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const submit = useSubmit();

  // const handleSubmitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  //   ev.preventDefault();
  //   const [imageBase64, setImageBase64] = useState<string>('');
  //   setErrors({});
  //   if (formRef.current) {
  //     const formData = new FormData(formRef.current);

  //     const user: User = {
  //       name: formData.get('name') as string,
  //       age: Number(formData.get('age')),
  //       email: formData.get('email') as string,
  //       passwords: formData.get('passwords') as string, // Пароль
  //       passwordCheck: formData.get('passwordCheck') as string, // Подтверждение пароля
  //       gender: formData.get('gender') as string,
  //       terms: !!formData.get('terms'),
  //       image: imageBase64,
  //       country: formData.get('country') as string,
  //     };

  //     const file = formData.get('image') as File;

  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         const imageBase64 = reader.result as string;

  //         user.image = imageBase64 as string;
  //         console.log(user.image, 'image');
  //       };
  //       reader.readAsDataURL(file);
  //     }

  //     try {
  //       userSchema.parse(user);
  //       user.image = formData.get('image') as string;
  //       dispatch(putUserToStored({ userId: nanoid(4), user }));
  //       submit(formData, { method: 'post' });
  //     } catch (e: unknown) {
  //       if (e instanceof ZodError) {
  //         const newErrors = e.errors.reduce(
  //           (acc: Record<string, string>, error) => {
  //             acc[error.path[0] as string] = error.message;
  //             return acc;
  //           },
  //           {}
  //         );
  //         setErrors((prev) => ({ ...prev, ...newErrors }));
  //       } else {
  //         console.error('An unexpected error occurred:', e);
  //       }
  //       return;
  //     }
  //   }
  // };

  const handleSubmitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setErrors({});
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      // Обработаем изображение через FileReader, перед отправкой формы
      const file = formData.get('image') as File;
      let imageBase64 = '';

      if (file) {
        imageBase64 = await readFileAsBase64(file); // Чтение изображения как Base64
      }

      const user: User = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        email: formData.get('email') as string,
        passwords: formData.get('passwords') as string, // Пароль
        passwordCheck: formData.get('passwordCheck') as string, // Подтверждение пароля
        gender: formData.get('gender') as string,
        terms: !!formData.get('terms'),
        image: imageBase64,
        country: formData.get('country') as string,
      };

      try {
        userSchema.parse(user);
        dispatch(putUserToStored({ userId: nanoid(4), user }));
        submit(formData, { method: 'post' });
      } catch (e: unknown) {
        if (e instanceof ZodError) {
          const newErrors = e.errors.reduce(
            (acc: Record<string, string>, error) => {
              acc[error.path[0] as string] = error.message;
              return acc;
            },
            {}
          );
          setErrors((prev) => ({ ...prev, ...newErrors }));
        } else {
          console.error('An unexpected error occurred:', e);
        }
        return;
      }
    }
  };

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

  return (
    <>
      <div className={styles['control-page']}>
        <Form
          method="post"
          ref={formRef}
          onSubmit={(ev) => handleSubmitForm(ev)}
          className={styles['form-container']}
        >
          <InputForm name="name" type="text" errors={errors} />
          <InputForm name="age" type="number" errors={errors} />
          <InputForm name="email" type="email" errors={errors} />
          <InputForm name="passwords" type="password" errors={errors} />
          <InputForm name="passwordCheck" type="password" errors={errors} />

          <InputGender errors={errors} />
          <InputCountry errors={errors} />

          <ImageUpload errors={errors} />

          <div>
            <label>
              <input type="checkbox" name="terms" value="on" />I accept the
              Terms and Conditions
            </label>
            {(errors?.terms && <span className="error">{errors.terms}</span>) ||
              ''}
          </div>

          <button type="submit">submit</button>
        </Form>
        <CreateBtnLink typeProps={'/'} text="Main" />
      </div>
    </>
  );
};

export default UnControlForms;
