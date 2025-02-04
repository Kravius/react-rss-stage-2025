import styles from './NoFiles.module.css';

const NoFiles: React.FC = () => {
  return (
    <>
      <h1 className={styles['error_massage']}>No result for your search</h1>
    </>
  );
};

//
export default NoFiles;
