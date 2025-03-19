import getData from '@services/api';
import styles from './ListCountry.module.css';
import { useEffect, useState } from 'react';
import { Country, Data } from 'src/type/type';
import { filterData } from '@services/filter-data';
// import { stored } from './countrySlice';
// import { useAppDispatch, useAppSelector } from '@store/store';

const ListCountry: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);
  // const dispatch = useAppDispatch();

  // const dataStored = useAppSelector((state) => state.country.country);
  // console.log(dataStored);

  useEffect(() => {
    const featchData = async () => {
      const res: Data[] = await getData();
      const dataFilter = filterData(res);

      // dispatch(stored(dataFilter));
      setData(dataFilter);
    };
    featchData();
  }, []);

  const createTable = () => (
    <table className={styles['country-table']}>
      <tr className={styles['country-table__header']}>
        <th>name</th>
        <th>population</th>
        <th>region</th>
        <th>flag</th>
      </tr>

      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.population}</td>
          <td>{item.region}</td>
          <td>{item.flag}</td>
        </tr>
      ))}
    </table>
  );
  return <>{data ? createTable() : <span>Loading...</span>}</>;
};

export default ListCountry;
