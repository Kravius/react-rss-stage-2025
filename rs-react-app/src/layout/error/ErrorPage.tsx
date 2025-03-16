import { useNavigate } from 'react-router';
import styles from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
  useNavigate();
  return (
    <div className={styles['error-page']}>
      <p>Error Page</p>
    </div>
  );
};

export default ErrorPage;
