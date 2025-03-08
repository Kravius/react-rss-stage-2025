import styles from './peoplePage.module.scss';
import { Suspense } from 'react';

import Spinner from '@components/Spinner/Spinner';
import SelectPersonInStore from '@components/SelectPersonInStore/SelectPersonInStore';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import SectionPeoplePage from '@components/MainPeoplePage/SectionPeoplePage';
import { getServerSideProps } from '@services/api';

interface PeoplePageProps {
  searchParams: {
    page?: string;
    search?: string;
    person?: string;
  };
}

const PeoplePage = async ({ searchParams }: PeoplePageProps) => {
  const { page = '1', search = '' } = await searchParams;
  const data = await getServerSideProps(page, search);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main className={`${styles['main_people-container']}`}>
          <SectionPeoplePage data={data} />
          <SelectPersonInStore />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default PeoplePage;
