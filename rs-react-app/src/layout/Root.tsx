import Header from '@layout/header/header';
import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <div className={styles['container-app']}>
        <Header />
        <Outlet />
        <footer>footer</footer>
      </div>
    </>
  );
}

export default Root;
