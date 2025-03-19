import { Country } from 'src/type/type';

interface Value {
  data: Country[];
  setData: React.Dispatch<React.SetStateAction<Country[]>>;
  filterPopulation: filterPopulation;
  setFilterPopulation: React.Dispatch<React.SetStateAction<filterPopulation>>;
}

export type filterPopulation = 'ascending' | 'descending';

const ascendingDescendingPopulation = ({
  data,
  setData,
  filterPopulation,
  setFilterPopulation,
}: Value) => {
  if (filterPopulation === 'ascending') {
    setData([...data.sort((a, b) => a.population - b.population)]);
    setFilterPopulation('descending');
  } else {
    setData([...data.sort((a, b) => b.population - a.population)]);
    setFilterPopulation('ascending');
  }
};

export { ascendingDescendingPopulation };
