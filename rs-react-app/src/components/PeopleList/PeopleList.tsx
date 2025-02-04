import { Link } from 'react-router-dom';
import { PersonToRender } from '../../layout/PeoplePage/type';

interface PeopleListProps {
  people: PersonToRender[];
}

import styles from './PeopleList.module.css';

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  return (
    <div className={styles['list_container']}>
      <ul>
        {people.map(({ id, img, name }) => (
          <li className={styles['people_list']} key={id}>
            <Link to={`/people/${id}`}>
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

// class PeopleList extends Component<PeopleListProps> {
//   render(): ReactNode {
//     const { people } = this.props;
//     return (
//       <>
//         {
//           <ul className={styles['list_container']}>
//             {people.map(({ id, img, name }) => (
//               <li className={styles['people_list']} key={id}>
//                 <a href={`/people/${id}`}>
//                   <img
//                     className={styles['person_photo']}
//                     src={img}
//                     alt="character"
//                   />
//                   <span>{name}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         }
//       </>
//     );
//   }
// }

// export default PeopleList;
