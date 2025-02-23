import { useAppDispatch, useAppSelector } from '../../store';
import { removeAllPersonFromStored } from '../PeopleList/people.slice';

const SelectPersonInStore: React.FC = () => {
  const dispatch = useAppDispatch();
  const savePeopleStore = useAppSelector((state) => state.people.saveEntities);

  const countOfPeopleOnStore = Object.entries(savePeopleStore).length;

  const handleDownload = () => {
    if (countOfPeopleOnStore === 0) {
      alert('Нет выбранных людей для скачивания!');
      return;
    }

    const headers = ['ID', 'Name', 'Description', 'Details URL'];

    const rows = Object.values(savePeopleStore).map((person) => [
      person?.birth_year,
      person?.id,
      person?.height,
      person?.eye_color,
      person?.gender,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${countOfPeopleOnStore}_selected_people.csv`;

    downloadLink.click();

    URL.revokeObjectURL(downloadLink.href);
    dispatch(removeAllPersonFromStored());
  };

  return (
    <>
      {countOfPeopleOnStore > 0 && (
        <div>
          <h2>Select: {countOfPeopleOnStore}</h2>
          <button onClick={handleDownload}>Download</button>
          <button onClick={() => dispatch(removeAllPersonFromStored())}>
            Cancel All
          </button>
        </div>
      )}
    </>
  );
};

export default SelectPersonInStore;
