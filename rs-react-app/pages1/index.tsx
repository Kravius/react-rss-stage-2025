import styles from './peoplePage.module.css';

import PeopleList from '@components/PeopleList/PeopleList';

import Spinner from '@components/Spinner/Spinner';
import Search from '@components/Search/Search';

import { newFilterPeopleData } from '@services/filterPeople';

import { useGetUsersByParamsSearchQuery } from '@services/getData';
import { useTheme } from '@services/ThemeContex';
import SelectPersonInStore from '@components/SelectPersonInStore/SelectPersonInStore';
import ErrorMessage from '@components/Error/ErrorMessage/ErrorMessage';
import ErrorBTN from '@components/Error/ErrorBtn/ErrorBtn';
import { useRouter } from 'next/router';
import Pagination from '@components/Pagination/Pagination';

const PeoplePage = () => {
  const { isDark, toggleTheme } = useTheme();
  //проверка загрузки
  const router = useRouter();
  const { search, page = '1' } = router.query;

  const { data, isFetching } = useGetUsersByParamsSearchQuery({
    page: page as string,
    search: search as string,
  });
  const { people, pages } = newFilterPeopleData(data);
  const { next, previous } = pages;

  return (
    <main
      className={`${styles['main_people-container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <header>
        <button onClick={toggleTheme}>
          {isDark ? 'turn light' : 'turn dark'}
        </button>
        <Search />
      </header>
      <section>
        {isFetching ? (
          <Spinner />
        ) : people?.length ? (
          <PeopleList people={people} />
        ) : (
          <ErrorMessage />
        )}
        <Pagination next={next} previous={previous} />
      </section>
      <section>{<SelectPersonInStore />}</section>
      <footer>
        <ErrorBTN>Error click</ErrorBTN>
      </footer>
    </main>
  );
};

export default PeoplePage;
