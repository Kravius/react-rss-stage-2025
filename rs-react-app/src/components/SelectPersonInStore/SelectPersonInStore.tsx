import { useAppDispatch, useAppSelector } from '../../store';
import { removeAllPersonFromStored } from '../PeopleList/people.slice';

const SelectPersonInStore: React.FC = () => {
  const dispatch = useAppDispatch();
  const savePeopleStore = useAppSelector((state) => state.people.saveEntities);

  const countOfPeopleOnStore = Object.entries(savePeopleStore).length;
  return (
    <>
      {countOfPeopleOnStore > 0 && (
        <div>
          <button>{countOfPeopleOnStore} download</button>
          <button onClick={() => dispatch(removeAllPersonFromStored())}>
            Cancel All
          </button>
        </div>
      )}
    </>
  );
};

export default SelectPersonInStore;
