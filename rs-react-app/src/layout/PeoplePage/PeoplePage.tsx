import styles from './peoplePage.module.css';

import ErrorMessage from '../../components/Error/ErrorMessage/ErrorMessage';
import PeopleList from '../../components/PeopleList/PeopleList';

import { PersonToRender } from './type';
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
import { filterPeople } from '../../services/filterPeople';

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('searchTerm') || '';
  const page = url.searchParams.get('page') || '';
  try {
    const { newPeopleList, pages } = await filterPeople({ searchTerm, page });
    return { newPeopleList, searchTerm, pages };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка загрузки данных', { status: 500 });
  }
}

const PeoplePage = () => {
  //проверка загрузки
  const navigation = useNavigation();
  //отправляем по адресу
  const navigate = useNavigate();
  const { newPeopleList, pages } = useLoaderData();
  const { next, previous, current } = pages;

  const [searchParams, setSearchParams] = useSearchParams();

  const [people, setPeople] = useState<PersonToRender[]>(newPeopleList);

  const [nextPage, setNextPage] = useState<string | null>(next);
  const [prevPage, setPrevPage] = useState<string | null>(previous);

  useEffect(() => {
    setSearchParams({ page: searchParams.get('page') || '1' });
  }, []);

  useEffect(() => {
    if (JSON.stringify(newPeopleList) !== localStorage.getItem('peopleData')) {
      setPeople(newPeopleList);
    }
    setNextPage(next || '');
    setPrevPage(previous || '');
    localStorage.setItem('peopleData', JSON.stringify(newPeopleList));

    //после поиска и использования лоудера проверяем какие данные сейчас
  }, [newPeopleList, next, previous]);

  const goHome = () => {
    localStorage.setItem('searchTerm', '');
    if (!searchParams) {
      setSearchParams({ page: current });
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
    <div className={styles['main_people-container']}>
      <div>
        <div>
          <Search />
          <button onClick={() => goHome()}>Home Page</button>
        </div>
        {navigation.state === 'loading' ? (
          <Spinner />
        ) : people.length ? (
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
      <div className={styles['person']}>
        <Outlet />
      </div>
    </div>
  );
};

export default PeoplePage;
