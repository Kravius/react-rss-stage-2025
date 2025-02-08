import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <>
      <h1 className={styles['error_massage']}>No result for your search</h1>
    </>
  );
};

export default ErrorMessage;
