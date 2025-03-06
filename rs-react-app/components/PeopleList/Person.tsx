'use client';
import { useGetPersonByIdQuery } from '@services/getData';
import Spinner from '@components/Spinner/Spinner';
import useQueryParams from '@services/customHook/useQueryparams';
import { useEffect } from 'react';

interface PersonProps {
  id: string;
  setIsActive?: (id: string | null) => void;
}

const Person: React.FC<PersonProps> = ({ id, setIsActive }) => {
  const { setQuery, removeParam } = useQueryParams();
  // const { peopleId } = router.query;
  const { data } = useGetPersonByIdQuery({ id });

  useEffect(() => {
    setQuery('people', id);

    return () => {
      removeParam('people');
    };
  }, [id]);

  const handelClosePerson = () => {
    setIsActive(null);
    removeParam('people');
  };

  return (
    <>
      {data ? (
        <div>
          <button onClick={() => handelClosePerson()}>close</button>
          <p>name: {data?.name}</p>
          <p>birth_year: {data?.birth_year}</p>
          <p>height: {data?.height}</p>
          <p>mass: {data?.mass}</p>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Person;
