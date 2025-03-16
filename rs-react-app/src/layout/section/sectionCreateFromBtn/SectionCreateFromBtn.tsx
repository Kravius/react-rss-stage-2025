import CreateBtnLink from '@components/button/linkFormBtn/CreateBtnLink';
import styles from './SectionCreateFromBtn.module.css';

const SectionCreateFromBtn: React.FC = () => {
  return (
    <section className={styles['section-btn']}>
      <CreateBtnLink typeProps="un-control-form" />
      {/* <CreateBtnLink typeProps="control-form" /> */}
    </section>
  );
};

export default SectionCreateFromBtn;
