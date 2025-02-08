// import styles from './Person.module.css';

import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getPerson } from '../../services/filterPeople';
import { PersonToRender } from '../../layout/PeoplePage/type';

export async function loader({ params }: LoaderFunctionArgs) {
  // export async function loader({ request, params }: LoaderFunctionArgs) {
  // const url = new URL(request.url);
  // const page = url.searchParams.get('page');
  // console.log(url, 'Person');
  try {
    const person = await getPerson(params.peopleId || '');
    return { person };
  } catch (error) {
    console.log(error);
    throw new Response('Ошибка загрузки данных', { status: 500 });
  }
}

const Person: React.FC = () => {
  const { person } = useLoaderData<{ person: PersonToRender }>();
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
