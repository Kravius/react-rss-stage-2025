import { Country } from 'src/type/type';
import styles from './CountryRow.module.css';
import React from 'react';

interface CountryRowProps {
  country: Country;
  handelCountryClick: (index: string) => void;
  active: string;
}

const CountryRow: React.FC<CountryRowProps> = ({
  country,
  handelCountryClick,
  active,
}) => {
  console.log('render CountryRow ', country.idFromData);
  return (
    <>
      <tr
        onClick={() => handelCountryClick(country.idFromData)}
        className={active ? styles.active : ''}
      >
        <td>{country.name}</td>
        <td>{country.population}</td>
        <td>{country.region}</td>
        <td>{country.flag}</td>
      </tr>
    </>
  );
};

export default React.memo(
  CountryRow,
  (prevProps, NextProps) =>
    prevProps.active === NextProps.active &&
    prevProps.country === NextProps.country
);
