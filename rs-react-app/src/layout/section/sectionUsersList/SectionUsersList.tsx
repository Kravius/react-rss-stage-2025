import { useAppSelector } from '@store/store';
import styles from './SectionUsersList.module.css';
import CreateUser from '@components/user/CreateUser';

const SectionUsersList: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const usersToRender = Object.entries(users);
  const lastUsersId = useAppSelector((state) => state.users.lastAddedUserId);

  return (
    <section className={styles['section-users-list']}>
      {(usersToRender.length && (
        <ul className={styles['users-list-container']}>
          {usersToRender.reverse().map(([userId, user]) => (
            <li
              key={userId}
              className={lastUsersId === userId ? styles['last-user-add'] : ''}
            >
              <CreateUser user={user} userId={userId} />
            </li>
          ))}
        </ul>
      )) || <span>no users</span>}
    </section>
  );
};

export default SectionUsersList;
