import { errors } from '@layout/forms/userSchema';
import styles from './InputForm.module.css';

interface InputFormProps {
  name: string;
  type: string;
  errors: errors;
}

const InputForm: React.FC<InputFormProps> = ({ name, type, errors }) => {
  return (
    <>
      <div className={styles['input-container']}>
        <label htmlFor={name}>{name}:</label>
        <input name={name} type={type} />
        {errors?.[name] && <span className="error">{errors?.[name]}</span>}
      </div>
    </>
  );
};

export default InputForm;
