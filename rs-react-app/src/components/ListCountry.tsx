import getData from '@services/Api/api';
import styles from './ListCountry.module.css';
import { useEffect, useState } from 'react';
import { Country, Data } from 'src/type/type';
import { filterData } from '@services/Api/filter-data';
import { ascendingDescendingPopulation } from '@services/filterTable/ascending-descending';
import SortCountryDetails from './sort/SortCountryDetails';
import { filterPopulation } from '@services/filterTable/type';

const ListCountry: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);
  const [filterPopulation, setFilterPopulation] =
    useState<filterPopulation>('ascending');

  useEffect(() => {
    const featchData = async () => {
      const res: Data[] = await getData();
      const dataFilter = filterData(res);

      setData(dataFilter);
    };
    featchData();
  }, []);

  const createTable = () => (
    <table className={styles['country-table']}>
      <thead>
        <tr className={styles['country-table__header']}>
          <th>{<SortCountryDetails data={data} setData={setData} />}</th>
          <th
            onClick={() =>
              ascendingDescendingPopulation({
                data,
                setData,
                filterPopulation,
                setFilterPopulation,
              })
            }
          >
            population
          </th>
          <th>region</th>
          <th>flag</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.population}</td>
            <td>{item.region}</td>
            <td>{item.flag}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return <>{data ? createTable() : <span>Loading...</span>}</>;
};

export default ListCountry;
