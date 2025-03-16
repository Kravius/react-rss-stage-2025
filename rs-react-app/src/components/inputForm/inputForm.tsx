import styles from './InputForm.module.css';

interface InputFormProps {
  name: string;
  type: string;
}

const InputForm: React.FC<InputFormProps> = ({ name, type }) => {
  return (
    <>
      <div className={styles['input-container']}>
        <label htmlFor={name}>{name}:</label>
        <input name={name} type={type} />
      </div>
    </>
  );
};

export default InputForm;
