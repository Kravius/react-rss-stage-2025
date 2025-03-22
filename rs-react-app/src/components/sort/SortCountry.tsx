import { setCountryProps } from '@services/filterTable/type';
import React from 'react';

const SortName: React.FC<setCountryProps> = ({ handelSort }) => {
  console.log('name');
  return (
    <div>
      <input
        placeholder="search by name"
        onChange={(ev) => handelSort('name', ev.target.value || '')}
      />
    </div>
  );
};

export default React.memo(SortName);
