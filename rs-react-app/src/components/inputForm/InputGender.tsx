import { errors } from '@layout/forms/userSchema';
import styles from './InputForm.module.css';

interface InputCountryProps {
  errors: errors;
}

const InputGender: React.FC<InputCountryProps> = ({ errors }) => {
  return (
    <div className={styles['input-container-gender']}>
      <label>Gender</label>
      <input type="radio" id="male" name="gender" value="male" /> Male
      <input type="radio" id="female" name="gender" value="female" /> Female
      {errors?.gender && <span className="error">{errors.gender}</span>}
    </div>
  );
};

export default InputGender;
