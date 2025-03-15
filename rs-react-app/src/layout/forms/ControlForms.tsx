import CreateBtnLink from '@components/button/linkFormBtn/CreateBtnLink';
import styles from './Forms.module.css';

const ControlForms: React.FC = () => {
  return (
    <>
      <div className={styles['control-page']}>
        ControlForms.tsx
        <CreateBtnLink typeProps={'/'} text="Main" />
      </div>
    </>
  );
};

export default ControlForms;
