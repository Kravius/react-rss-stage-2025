'use client';
import styles from './SectionPeoplePage.module.css';

import Spinner from '@components/Spinner/Spinner';
import PeopleList from '@components/PeopleList/PeopleList';
import ErrorMessage from '@components/Error/ErrorMessage/ErrorMessage';
import Pagination from '@components/Pagination/Pagination';
import { newFilterPeopleData } from '@services/filterPeople';
import { useTheme } from '@services/ThemeContex';
import { FC, Suspense } from 'react';
import { PeopleResponse } from '@type/type';

interface SectionPeoplePageProps {
  data: PeopleResponse;
}

const SectionPeoplePage: FC<SectionPeoplePageProps> = ({ data }) => {
  const { isDark } = useTheme();

  const { people, pages } = newFilterPeopleData(data);
  const { next, previous } = pages;
  return (
    <section className={`${styles[isDark ? 'dark' : '']}`}>
      <Suspense fallback={<Spinner />}>
        {people?.length ? <PeopleList people={people} /> : <ErrorMessage />}
      </Suspense>
      <Pagination next={next} previous={previous} />
    </section>
  );
};

export default SectionPeoplePage;
