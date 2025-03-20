import { Value } from './type';

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
