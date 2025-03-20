import { Country } from 'src/type/type';

export interface setPopulation {
  filterPopulation: filterPopulation;
  setFilterPopulation: React.Dispatch<React.SetStateAction<filterPopulation>>;
}

export interface setCountryProps {
  data: Country[];
  setData: React.Dispatch<React.SetStateAction<Country[]>>;
}

export interface Value extends setCountryProps, setPopulation {}

export type filterPopulation = 'ascending' | 'descending';
