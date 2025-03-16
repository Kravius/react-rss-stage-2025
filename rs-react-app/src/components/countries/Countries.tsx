import { useAppSelector } from '@store/store';
import { errors } from '@layout/forms/userSchema';
import styles from '@components/inputForm/InputForm.module.css';

interface InputCountryProps {
  errors: errors;
}

const InputCountry: React.FC<InputCountryProps> = ({ errors }) => {
  const countries = useAppSelector((state) => state.countries.country);
  const countriesToRender = Object.entries(countries);

  return (
    <>
      <div className={styles['input-container']}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          list="countrydata"
          autoComplete="off"
          className={styles['input-container']}
        />
        <datalist id="countrydata">
          {countriesToRender.map(([id, { name }]) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </datalist>
        {errors?.country && <span className="error">{errors.country}</span>}
      </div>
    </>
  );
};

export default InputCountry;
