import styles from './PeopleList.module.scss';
import { useTheme } from '@services/ThemeContex';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  peopleSlice,
  removePersonFromStored,
} from '@components/PeopleList/people.slice';
import { PersonToRender } from 'pages1/type';
import { useState } from 'react';
import Person from './Person';
import PersonStartScreen from '@components/PersonStartScreen/PersonStartScreen';
import { useRouter } from 'next/router';

interface PeopleListProps {
  people: PersonToRender[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const [isActive, setIsActive] = useState<string>('');
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { saveEntities } = useAppSelector((state) => state.people);
  const router = useRouter();
  const { person } = router.query;

  const handleCheckedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
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
      ></div>
    );
  }
  const openWindowPerson = (id: string) => {
    setIsActive(id);
  };

  return (
    <div
      className={`${styles['list_container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <ul>
        {people.map(({ id, name }) => {
          return (
            <li className={styles['people_list']} key={id}>
              <input
                type="checkbox"
                checked={id in saveEntities || false}
                onChange={(ev) => handleCheckedChange(ev, id)}
              />
              <button onClick={() => openWindowPerson(id)}>
                <span>{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        {((isActive || person) && (
          <Person
            id={isActive.toString() || (person as string)}
            setIsActive={setIsActive}
          />
        )) || <PersonStartScreen />}
      </div>
    </div>
  );
};

export default PeopleList;
