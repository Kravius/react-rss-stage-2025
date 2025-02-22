import { Link, useSearchParams } from 'react-router-dom';
import { PersonToRender } from '../../layout/PeoplePage/type';

interface PeopleListProps {
  people: PersonToRender[];
}

import styles from './PeopleList.module.css';
import { useTheme } from '../../services/ThemeContex';

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const [searchParams] = useSearchParams();
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles['list_container']} ${styles[isDark ? 'dark' : '']}`}
    >
      <ul>
        {people.map(({ id, img, name }) => (
          <li className={styles['people_list']} key={id}>
            <Link
              to={{
                pathname: `/people/${id}`,
                search: searchParams.toString(),
              }}
            >
              <img
                className={styles['person_photo']}
                src={img}
                alt="character"
              />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
