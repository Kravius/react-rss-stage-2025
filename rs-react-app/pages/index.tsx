// import styles from './peoplePage.module.scss';
import styles from './peoplePage.module.css';

import PeopleList from '@components/PeopleList/PeopleList';

import Spinner from '@components/Spinner/Spinner';
import Search from '@components/Search/Search';

import { useEffect, useState } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { newFilterPeopleData } from '@services/filterPeople';

import { useGetUsersByParamsSearchQuery } from '@services/getData';
import { useTheme } from '@services/ThemeContex';
import SelectPersonInStore from '@components/SelectPersonInStore/SelectPersonInStore';
import ErrorMessage from '@components/Error/ErrorMessage/ErrorMessage';
import ErrorBTN from '@components/Error/ErrorBtn/ErrorBtn';
import { useRouter } from 'next/router';

const PeoplePage = () => {
  const { isDark, toggleTheme } = useTheme();
  //проверка загрузки
  const router = useRouter();
  const { searchTerm, page = '1' } = router.query;
  // const { searchTerm, page } = useLoaderData();

  const { data } = useGetUsersByParamsSearchQuery({
    page: page as string,
    //как сделать так что б когда не было поиска оно кидало на первую страницу
    // page: searchTerm ? '1' : page,
    search: searchTerm as string,
  });
  const { people, pages } = newFilterPeopleData(data);
  // const { next, previous } = pages;
  console.log(people);

  // const [nextPage, setNextPage] = useState<string | null>(next);
  // const [prevPage, setPrevPage] = useState<string | null>(previous);

  // useEffect(() => {
  //   setNextPage(next || '');
  //   setPrevPage(previous || '');

  //   //после поиска и использования лоудера проверяем какие данные сейчас
  // }, [next, previous]);

  // const handlePageChange = (newPage: string | null) => {
  //   if (newPage) {
  //     setSearchParams((prev) => ({
  //       ...Object.fromEntries(prev),
  //       page: newPage,
  //     }));
  //   }
  // };
  console.log('render people');
  console.log(people);
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
        </div>
        {people?.length ? <PeopleList people={people} /> : <ErrorMessage />}
        {
          // navigation.state === 'loading' ? (
          // <Spinner />
          // ) : people?.length ? (
          // <PeopleList people={people} />
          // ) : (
          // <ErrorMessage />
          // )
        }
      </div>
    </div>
  );
  // return (
  //   <div
  //     className={`${styles['main_people-container']} ${styles[isDark ? 'dark' : '']}`}
  //   >
  //     <div>
  //       <div>
  //         <button onClick={toggleTheme}>
  //           {isDark ? 'turn light' : 'turn dark'}
  //         </button>
  //         <Search />
  //         <button onClick={() => goHome()}>Home Page</button>
  //       </div>
  // !
  //       {navigation.state === 'loading' ? (
  //         <Spinner />
  //       ) : people?.length ? (
  //         <PeopleList people={people} />
  //       ) : (
  //         <ErrorMessage />
  //       )}
  //       <div className={styles['pagination']}>
  //         <button
  //           onClick={() => handlePageChange(prevPage)}
  //           disabled={!prevPage}
  //         >
  //           Previous
  //         </button>
  //         <button
  //           onClick={() => handlePageChange(nextPage)}
  //           disabled={!nextPage}
  //           className={
  //             navigation.state === 'loading' ? styles['non_active'] : ''
  //           }
  //         >
  //           Next
  //         </button>
  //       </div>
  //       {<SelectPersonInStore />}
  //       <div>
  //         <ErrorBTN>Error click</ErrorBTN>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default PeoplePage;
