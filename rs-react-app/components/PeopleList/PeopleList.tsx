import { Link, useSearchParams } from 'react-router-dom';

import styles from './PeopleList.module.scss';
import { useTheme } from '@services/ThemeContex';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  peopleSlice,
  removePersonFromStored,
} from '@components/PeopleList/people.slice';
import { PersonToRender } from '@pages/type';

interface PeopleListProps {
  people: PersonToRender[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const [searchParams] = useSearchParams();
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { saveEntities } = useAppSelector((state) => state.people);

  console.log('render');

  const handleCheckedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    //нужно напрямую брать с value input
    if (e.target.checked) {
      const person = people.find((person) => person.id === id);
      dispatch(peopleSlice.actions.putPersonToStored({ id, person }));
    } else {
      dispatch(removePersonFromStored({ id }));
    }
  };

  if (!people.length) {
    return (
      <div
        data-testid="list-container"
        className={`${styles['list_container']} ${styles[isDark ? 'dark' : '']}`}
      >
        <ul></ul>
      </div>
    );
  }

  return (
    <div
      className={`${styles['list_container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <ul>
        {people.map(({ id, name }) => (
          <li className={styles['people_list']} key={id}>
            <input
              type="checkbox"
              checked={id in saveEntities || false}
              onChange={(ev) => handleCheckedChange(ev, id)}
            />
            <Link
              to={{
                pathname: `/people/${id}`,
                search: searchParams.toString(),
              }}
            >
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
