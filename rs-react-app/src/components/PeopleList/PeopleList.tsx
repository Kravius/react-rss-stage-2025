import styles from './PeopleList.module.css';

import { PersonToRender } from '../../layout/PeoplePage/type';
import { Component, ReactNode } from 'react';

interface PeopleListProps {
  people: PersonToRender[];
}

class PeopleList extends Component<PeopleListProps> {
  render(): ReactNode {
    const { people } = this.props;
    return (
      <>
        {
          <ul className={styles['list_container']}>
            {people.map(({ id, img, name }) => (
              <li className={styles['people_list']} key={id}>
                <a href={`/people/${id}`}>
                  <img
                    className={styles['person_photo']}
                    src={img}
                    alt="character"
                  />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}

export default PeopleList;
