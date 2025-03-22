import { Country, Data } from 'src/type/type';

const filterData = (data: Data[]): Country[] => {
  const newData = data.map((item, index) => {
    return {
      population: item.population,
      region: item.region,
      flag: item.flag,
      name: item.name.common,
      idFromData: index + data.length.toString(),
    };
  });

  return newData;
};
export { filterData };
