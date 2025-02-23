import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
// import { PersonToRender } from '../../layout/PeoplePage/type';
// import { useAppSelector } from '../../store';
// import { peopleSlice } from './people.slice';
import { useGetPersonByIdQuery } from '../../services/getData';

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  const search = url.searchParams.get('search');

  const id = params.peopleId;

  return { id, search, page };
}

const Person: React.FC = () => {
  const { id, search } = useLoaderData();

  const { data } = useGetPersonByIdQuery({ id, search });
  console.log(data);
  return (
    <>
      <div>
        {/* <img src={data?.img} alt={takePerson.name} /> */}
        <p>name: {data?.name}</p>
        <p>birth_year: {data?.birth_year}</p>
        <p>height: {data?.height}</p>
        <p>mass: {data?.mass}</p>
      </div>
    </>
  );
};

export default Person;
