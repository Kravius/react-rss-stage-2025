import styles from './CreateUser.module.css';
import { UserId, User, removeUserById } from './UsersSlice';
import { useAppDispatch } from '@store/store';

interface userProps {
  user: User;
  userId: UserId;
}

const CreateUser: React.FC<userProps> = ({ user, userId }) => {
  const dispatch = useAppDispatch();

  const handelDeleteUser = (userId: UserId) => {
    dispatch(removeUserById({ userId }));
  };

  return (
    <div className={styles['user-container']}>
      <p>name:{user.name}</p>
      <p>age:{user.age}</p>
      <p>country:{user.country}</p>
      <p>email:{user.email}</p>
      <p>gender:{user.gender}</p>
      {user.image && (
        <img
          src={user.image}
          alt="User profile"
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <button onClick={() => handelDeleteUser(userId)}>delete User</button>
    </div>
  );
};

export default CreateUser;
