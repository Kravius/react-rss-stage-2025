import { Country } from 'src/type/type';
import { filterPopulation } from './type';

const ascendingDescendingPopulation = (
  data: Country[],
  population: filterPopulation
) => {
  console.log('ascendingDescendingPopulation');
  if (population === 'ascending') {
    return [...data.sort((a, b) => a.population - b.population)];
  } else {
    return [...data.sort((a, b) => b.population - a.population)];
  }
};

export { ascendingDescendingPopulation };
