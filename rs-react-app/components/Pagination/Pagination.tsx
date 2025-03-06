import { Pages } from '@services/filterPeople';
import styles from './Pagination.module.css';
import useQueryParams from '@services/customHook/useQueryparams';

const Pagination = ({ next, previous }: Pages) => {
  const { setQuery } = useQueryParams();
  const handlePageChange = (newPage: string | null) => {
    if (newPage) {
      setQuery('page', newPage);
    }
  };

  return (
    <div className={styles['pagination']}>
      <button onClick={() => handlePageChange(previous)} disabled={!previous}>
        Previous
      </button>
      <button onClick={() => handlePageChange(next)} disabled={!next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
