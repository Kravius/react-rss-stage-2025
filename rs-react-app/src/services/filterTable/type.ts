// export interface setCountryProps {
//   data: Country[];
//   setDataForSort: React.Dispatch<React.SetStateAction<Country[]>>;
//   dataForSort: Country[];
// }

// export interface setCountryProps {
//   handelSortName: (inputValue: string) => void;
// }
export interface setCountryProps {
  handelSort: (props: string, value: string) => void;
}
export interface sortCountryProps {
  regions: string[];
  handelSort: (props: string, value: string) => void;
}

export interface FormatSort {
  name: string;
  region: string;
  population: PopulationFormat;
}

export type PopulationFormat = 'ascending' | 'descending';
