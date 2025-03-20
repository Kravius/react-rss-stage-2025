// export interface setCountryProps {
//   data: Country[];
//   setDataForSort: React.Dispatch<React.SetStateAction<Country[]>>;
//   dataForSort: Country[];
// }

export interface setCountryProps {
  handelSortName: (inputValue: string) => void;
}
export interface sortCountryProps {
  regions: string[];
  handelSortRegion: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface FormatSort {
  name: string;
  region: string;
  population: filterPopulation;
}

export type filterPopulation = 'ascending' | 'descending';
