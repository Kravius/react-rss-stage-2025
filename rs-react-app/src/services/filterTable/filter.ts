import { Country } from 'src/type/type';

export const filterName = (data: Country[], inputValue: string) => {
  return [
    ...data.filter((item) =>
      item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    ),
  ];
};
export const filterRegion = (data: Country[], selectValue: string) => {
  return [...data.filter((item) => item.region.includes(selectValue || ''))];
};
