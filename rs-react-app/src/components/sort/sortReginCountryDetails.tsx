import React, { memo } from 'react';
import styles from './SortRegionDetails.module.css';
import { sortCountryProps } from '@services/filterTable/type';

const SortRegionDetails: React.FC<sortCountryProps> = ({
  regions,
  handelSort,
}) => {
  console.log('SortRegionDetails');
  return (
    <div>
      <select
        className={styles['country-list-container']}
        id="countryList"
        onChange={(ev) => handelSort('region', ev.target.value)}
      >
        <option value="">All Regions</option>
        {regions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(
  SortRegionDetails,
  (prevProps, NextProps) => prevProps.regions === NextProps.regions
);
