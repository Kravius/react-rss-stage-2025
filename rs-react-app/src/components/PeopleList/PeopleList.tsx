import { Link, useSearchParams } from 'react-router-dom';
import { PersonToRender } from '../../layout/PeoplePage/type';

interface PeopleListProps {
  people: PersonToRender[];
}

import styles from './PeopleList.module.css';
import { useTheme } from '../../services/ThemeContex';
import { useAppDispatch, useAppSelector } from '../../store';
import { peopleSlice, removePersonFromStored } from './people.slice';

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const [searchParams] = useSearchParams();
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  const savePeopleStore = useAppSelector((state) => state.people.saveEntities);
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

  return (
    <div
      className={`${styles['list_container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <ul>
        {people.map(({ id, name }) => (
          <li className={styles['people_list']} key={id}>
            <input
              type="checkbox"
              checked={savePeopleStore.hasOwnProperty(id) || false}
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
