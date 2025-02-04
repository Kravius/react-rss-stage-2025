import styles from './peoplePage.module.css';

// import { Component, ReactNode } from 'react';

import ErrorMessage from '../../components/Error/ErrorMessage/ErrorMessage';
import PeopleList from '../../components/PeopleList/PeopleList';

import { PersonToRender } from './type';
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/Search';
import ErrorBTN from '../../components/Error/ErrorBtn/ErrorBtn';

import { useEffect, useState } from 'react';
import {
  ActionFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { filterPeople } from '../../services/filterPeople';

export async function loader() {
  try {
    const { newPeopleList, next, previous } = await filterPeople();

    return { newPeopleList, next, previous };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка загрузки данных', { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const searchTerm = formData.get('searchTerm') as string;

  try {
    const { newPeopleList, next, previous } = await filterPeople(searchTerm);
    return { newPeopleList, next, previous };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка при выполнении поиска', { status: 500 });
  }
}

const PeoplePage = () => {
  const { newPeopleList } = useLoaderData();

  //add all next, previous!!
  // const { newPeopleList, next, previous } = useLoaderData();

  const actionData = useActionData() as
    | { newPeopleList: PersonToRender[]; next: string; previous: string }
    | undefined;

  const navigation = useNavigation();
  const isLoading = navigation.state === 'submitting';

  const [people, setPeople] = useState<PersonToRender[]>(newPeopleList);
  // const [nextPage, setNextPage] = useState<string>(next);
  // const [prevPage, setPrevPage] = useState<string>(previous);

  // const [error, setError] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [isLoadingg, setIsLoading] = useState(true);

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
    if (actionData) {
      setPeople(actionData.newPeopleList);
      // setNextPage(actionData.next || '');
      // setPrevPage(actionData.previous || '');
    }
  }, [actionData]);

  return (
    <div className={styles['main_people-container']}>
      <div>
        <Search />
        {isLoading ? (
          <Spinner />
        ) : people.length ? (
          <PeopleList people={people} />
        ) : (
          <ErrorMessage />
        )}
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
