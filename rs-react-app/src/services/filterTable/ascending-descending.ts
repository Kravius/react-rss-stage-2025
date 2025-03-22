import { Country } from 'src/type/type';
import { PopulationFormat } from './type';

const filterPopulation = (data: Country[], population: PopulationFormat) => {
  console.log('filterPopulation');
  if (population === 'ascending') {
    return [...data.sort((a, b) => a.population - b.population)];
  } else {
    return [...data.sort((a, b) => b.population - a.population)];
  }
};

export { filterPopulation };
