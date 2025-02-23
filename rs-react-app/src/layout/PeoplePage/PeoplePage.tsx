import styles from './peoplePage.module.css';

import ErrorMessage from '../../components/Error/ErrorMessage/ErrorMessage';
import PeopleList from '../../components/PeopleList/PeopleList';

// import { PersonToRender } from './type';
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/Search/Search';
import ErrorBTN from '../../components/Error/ErrorBtn/ErrorBtn';

import { useEffect, useState } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { newFilterPeopleData } from '../../services/filterPeople';
import { peopleSlice } from '../../components/PeopleList/people.slice';

import { useAppDispatch } from '../../store';
import { useGetUsersByParamsSearchQuery } from '../../services/getData';
import { useTheme } from '../../services/ThemeContex';

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const page = url.searchParams.get('page') || '';

  return { searchTerm, page };
}

// const people = [
//   {
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//   },
// ];

const PeoplePage = () => {
  const { isDark, toggleTheme } = useTheme();
  //проверка загрузки
  const navigation = useNavigation();
  //отправляем по адресу
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { searchTerm, page } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetUsersByParamsSearchQuery({
    page,
    //как сделать так что б когда не было поиска оно кидало на первую страницу
    // page: searchTerm ? '1' : page,
    search: searchTerm,
  });

  const { people, pages } = newFilterPeopleData(data);
  const { next, previous } = pages;

  dispatch(peopleSlice.actions.putToStored(people || []));

  const [nextPage, setNextPage] = useState<string | null>(next);
  const [prevPage, setPrevPage] = useState<string | null>(previous);

  useEffect(() => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev),
      page: searchParams.get('page') || '1',
    }));
  }, []);

  useEffect(() => {
    setNextPage(next || '');
    setPrevPage(previous || '');

    //после поиска и использования лоудера проверяем какие данные сейчас
  }, [next, previous]);

  const goHome = () => {
    localStorage.setItem('searchTerm', '');
    if (!searchParams) {
      setSearchParams({ page: '1' });
    }
    navigate('/');
  };

  const handlePageChange = (newPage: string | null) => {
    if (newPage) {
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        page: newPage,
      }));
    }
  };

  return (
    <div
      className={`${styles['main_people-container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <div>
        <div>
          <button onClick={toggleTheme}>
            {isDark ? 'turn light' : 'turn dark'}
          </button>
          <Search />
          <button onClick={() => goHome()}>Home Page</button>
        </div>
        {navigation.state === 'loading' ? (
          <Spinner />
        ) : people?.length ? (
          <PeopleList people={people} />
        ) : (
          <ErrorMessage />
        )}
        <div className={styles['pagination']}>
          <button
            onClick={() => handlePageChange(prevPage)}
            disabled={!prevPage}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(nextPage)}
            disabled={!nextPage}
          >
            Next
          </button>
        </div>
        <div>
          <ErrorBTN>Error click</ErrorBTN>
        </div>
      </div>
      <div className={`${styles['person']} ${styles[isDark ? 'dark' : '']}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default PeoplePage;
