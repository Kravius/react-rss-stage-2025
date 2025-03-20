// import styles from './SortCountryDetails.module.css';
import { setCountryProps } from '@services/filterTable/type';
import { useEffect, useRef } from 'react';

const SortCountryDetails: React.FC<setCountryProps> = ({ data, setData }) => {
  const refInput = useRef<HTMLInputElement>(null);
  const originalDataRef = useRef(data);

  useEffect(() => {
    if (data.length > 0 && originalDataRef.current.length === 0) {
      originalDataRef.current = data;
    }
  }, [data]);

  const handelSortName = () => {
    if (refInput.current?.value === '') {
      console.log('SortCountryDetails');
      setData(originalDataRef.current);
    } else {
      setData([
        ...originalDataRef.current.filter((item) =>
          item.name.includes(refInput.current?.value || '')
        ),
      ]);
    }
  };

  return (
    <div>
      <input
        onChange={handelSortName}
        ref={refInput}
        list="countryList"
        type="text"
        autoComplete="off"
      />
      <datalist id="countryList">
        {data.map((item) => (
          <option key={item.idFromData} value={item.name}>
            {item.name}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default SortCountryDetails;
