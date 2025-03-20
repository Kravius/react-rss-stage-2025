import { useState } from 'react';
import styles from './CreateBodyTable.module.css';
import { Country } from 'src/type/type';

interface CreateBodyTableProps {
  dataForSort: Country[];
}

const CreateBodyTable: React.FC<CreateBodyTableProps> = ({ dataForSort }) => {
  const [active, setActive] = useState<{ [key: string]: string }>(
    JSON.parse(localStorage.getItem('index') || '{}')
  );
  const handelCountryClick = (index: string) => {
    if (active[index] === index) {
      setActive((prev) => {
        const { [index]: _, ...rest } = prev;

        localStorage.setItem('index', JSON.stringify(rest));
        return rest;
      });
    } else {
      setActive((prev) => {
        const newActive = { ...prev, [index]: index };
        localStorage.setItem('index', JSON.stringify(newActive));
        return newActive;
      });
    }
    console.log(active);
  };

  //useCallback handelCountryClick  useMemo dataForSort useMemo active
  return (
    <tbody>
      {dataForSort.map((item) => (
        <tr
          onClick={() => handelCountryClick(item.idFromData)}
          key={item.idFromData}
          className={active[item.idFromData] ? styles.active : ''}
        >
          <td>{item.name}</td>
          <td>{item.population}</td>
          <td>{item.region}</td>
          <td>{item.flag}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default CreateBodyTable;
