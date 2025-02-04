// import styles from './Person.module.css';

import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getPerson } from '../../services/filterPeople';
import { PersonToRender } from '../../layout/PeoplePage/type';

export async function loader({ params }: LoaderFunctionArgs) {
  // console.log(typeof params.peopleId, 'peopleId');
  try {
    const person = await getPerson(params.peopleId || '');
    console.log(person, 'person');
    return { person };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка загрузки данных', { status: 500 });
  }
}

const Person: React.FC = () => {
  const { person } = useLoaderData<{ person: PersonToRender }>();
  console.log(person, 'Person');
  return (
    <>
      <div>
        <img src={person.img} alt={person.name} />
        <p>name: {person.name}</p>
        <p>birth_year: {person.birth_year}</p>
        <p>height: {person.height}</p>
        <p>mass: {person.mass}</p>
      </div>
    </>
  );
};

export default Person;
