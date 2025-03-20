import getData from '@services/Api/api';
import styles from './ListCountry.module.css';
import { useEffect, useState } from 'react';
import { Country, Data } from 'src/type/type';
import { filterData } from '@services/Api/filter-data';
import { ascendingDescendingPopulation } from '@services/filterTable/ascending-descending';

import { FormatSort } from '@services/filterTable/type';
import SortRegionDetails from './sort/sortReginCountryDetails';
import SortName from './sort/SortCountry';
import CreateBodyTable from './table/CreateBodyTable';
import { filterName, filterRegion } from '@services/filterTable/filter';

const ListCountry: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);
  const [dataForSort, setDataForSort] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);

  const [formatSort, setFormatSort] = useState<FormatSort>({
    name: '',
    region: '',
    population: 'ascending',
  });

  useEffect(() => {
    const featchData = async () => {
      const res: Data[] = await getData();
      const dataFilter = filterData(res);

      setData(dataFilter);
      setDataForSort(dataFilter);
      setRegions(Array.from(new Set(dataFilter.map((item) => item.region))));
    };
    featchData();
  }, []);

  useEffect(() => {
    const { population, name, region } = formatSort;
    const sortName = filterName(data, name);
    const sortRegion = filterRegion(sortName, region);
    setDataForSort(ascendingDescendingPopulation(sortRegion, population));
  }, [formatSort, data]);

  // const regionsMemo = useMemo(() => {
  //   if (data.length > 0) {
  //     return Array.from(new Set(data.map((item) => item.region)));
  //   }
  // }, [regions]);

  const handelSortName = (inputValue: string) => {
    setFormatSort((prev) => ({ ...prev, name: inputValue }));
  };

  const handelSortRegion = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setFormatSort((prev) => ({ ...prev, region: ev.target.value }));
  };

  const createTable = () => (
    <table className={styles['country-table']}>
      <thead>
        <tr className={styles['country-table__header']}>
          <th>{<SortName handelSortName={handelSortName} />}</th>
          <th
            className={styles['country-table__header__population']}
            onClick={() =>
              setFormatSort((prev) => ({
                ...prev,
                population:
                  prev.population === 'ascending' ? 'descending' : 'ascending',
              }))
            }
          >
            population: {formatSort.population}
          </th>
          <th>
            {
              <SortRegionDetails
                regions={regions || []}
                handelSortRegion={handelSortRegion}
              />
            }
          </th>
          <th>flag</th>
        </tr>
      </thead>

      <CreateBodyTable dataForSort={dataForSort} />
    </table>
  );
  return <>{data ? createTable() : <span>Loading...</span>}</>;
};

export default ListCountry;
