import CreateBtnLink from '@components/button/linkFormBtn/CreateBtnLink';
import styles from './Forms.module.css';
import { useRef } from 'react';
import { Form, redirect, useSubmit } from 'react-router';
import InputForm from '@components/inputForm/inputForm';
import { useAppDispatch } from '@store/store';
import { putUserToStored, User } from '@components/user/UsersSlice';
import { nanoid } from 'nanoid';

export const action = async () => {
  return redirect('/');
};

const UnControlForms: React.FC = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const submit = useSubmit();

  console.log('UnControlForms');

  const handleSubmitFrom = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      const user: User = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        email: formData.get('email') as string,
        passwords: formData.get('passwords') as string,
        passwordCheck: formData.get('passwordCheck') as string,
        gender: formData.get('gender') as string,
        image: formData.get('image')
          ? (formData.get('image') as File).name
          : '',
        country: formData.get('country') as string,
      };

      dispatch(putUserToStored({ userId: nanoid(4), user }));
      submit(formData, { method: 'post' });
    }
    return;
  };

  return (
    <>
      <div className={styles['control-page']}>
        <Form
          method="post"
          ref={formRef}
          onSubmit={(ev) => handleSubmitFrom(ev)}
          className={styles['form-container']}
        >
          <InputForm name="name" type="text" />
          <InputForm name="age" type="number" />
          <InputForm name="email" type="email" />
          <InputForm name="passwords" type="password" />
          <InputForm name="passwordCheck" type="password" />
          <InputForm name="gender" type="text" />
          <InputForm name="image" type="text" />
          <InputForm name="country" type="text" />
          <button type="submit">submit</button>
        </Form>
        <CreateBtnLink typeProps={'/'} text="Main" />
      </div>
    </>
  );
};

export default UnControlForms;
