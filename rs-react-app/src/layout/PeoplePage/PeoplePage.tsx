import styles from './peoplePage.module.css';

// import { Component, ReactNode } from 'react';

import ErrorMessage from '../../components/Error/ErrorMessage/ErrorMessage';
import PeopleList from '../../components/PeopleList/PeopleList';

import { PersonToRender } from './type';
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/Search/Search';
import ErrorBTN from '../../components/Error/ErrorBtn/ErrorBtn';

import { useEffect, useState } from 'react';
import {
  // ActionFunctionArgs,
  Outlet,
  // useActionData,
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
    const { newPeopleList, next, previous, pages } = await filterPeople(
      searchTerm,
      page
    );
    return { newPeopleList, next, previous, searchTerm, pages };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка загрузки данных', { status: 500 });
  }
}

// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const searchTerm = formData.get('searchTerm') as string;
//   console.log(searchTerm, 'action');
//   try {
//     const { newPeopleList, next, previous } = await filterPeople(searchTerm);
//     return { newPeopleList, next, previous };
//   } catch (error) {
//     console.log(error);
//     throw new Response('Ошибка при выполнении поиска', { status: 500 });
//   }
// }
// useEffect(() => {
//   if (actionData) {
//     setPeople(actionData.newPeopleList);
//     // setNextPage(actionData.next || '');
//     // setPrevPage(actionData.previous || '');
//   }
// }, [actionData]);

const PeoplePage = () => {
  //проверка загрузки
  const navigation = useNavigation();
  //отправляем по адресу
  const navigate = useNavigate();
  const { newPeopleList, pages } = useLoaderData();
  const { next, previous } = pages;

  const [searchParams, setSearchParams] = useSearchParams();

  const [people, setPeople] = useState<PersonToRender[]>(newPeopleList);

  const [nextPage, setNextPage] = useState<string>(next);
  const [prevPage, setPrevPage] = useState<string>(previous);

  // // const filterPeople = (res: PeopleResponse) => {
  // //   const peopleList: PersonToRender[] = res.results.map((person: Person) => {
  // //     const id = getPeopleId(person.url);
  // //     const img = getPeopleImg(id);
  // //     return {
  // //       name: person.name,
  // //       id,
  // //       img,
  // //     };
  // //   });
  // //   return peopleList;
  // //   // setPeople(peopleList);
  // //   // setFilterPeople(peopleList);
  // //   // setErrorApi(false);
  // //   // checkLocalStorage(peopleList);

  // //   //after add this
  // //   // setNextPage({ next: res.next });
  // //   // setPrevPage({ previous: res.previous });
  // // };

  // const fetchResource = async () => {
  //   try {
  //     setLoading(true);
  //     const { newPeopleList, next, previous } = await filterPeople();

  //     setPeople(newPeopleList);
  //     next ? setNextPage(next) : setNextPage('');
  //     previous ? setPrevPage(previous) : setPrevPage('');
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    setSearchParams({ page: searchParams.get('page') || '1' });
  }, []);

  useEffect(() => {
    if (newPeopleList) {
      setPeople(newPeopleList);
      setNextPage(next || '');
      setPrevPage(previous || '');
      localStorage.setItem('peopleData', JSON.stringify(newPeopleList));
    }
    //после поиска и использования лоудера проверяем какие данные сейчас
  }, [newPeopleList, next, previous]);

  const goHome = () => {
    localStorage.setItem('searchTerm', '');
    if (!searchParams) {
      setSearchParams({ page: '1' });
    }
    navigate('/');
  };

  const handleNextPage = () => {
    console.log(nextPage, 'handleNextPage');
    if (nextPage) {
      // setSearchParams((prev) => ({ ...prev, page: nextPage }));
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        page: nextPage,
      }));
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      // setSearchParams((prev) => ({ ...prev, page: prevPage }));
      setSearchParams((prev) => {
        console.log(prev, 'prev');
        console.log(Object.fromEntries(prev), 'Object');
        return {
          ...Object.fromEntries(prev),
          page: prevPage,
        };
      });
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
          <button onClick={handlePrevPage} disabled={!prevPage}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={!nextPage}>
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
