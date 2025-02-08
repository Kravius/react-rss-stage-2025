import styles from './PersonStartScreen.module.css';

const PersonStartScreen: React.FC = () => {
  return (
    <>
      <div className={styles['person_start_screen']}>
        <h1>Узнай больше о персонажах Звездных воин</h1>
        <p>
          Звёздные войны Mедиафраншиза в жанре эпической космической оперы,
          включающая в себя 12 художественных фильмов
        </p>
      </div>
    </>
  );
};

export default PersonStartScreen;
