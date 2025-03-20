import styles from './SortRegionDetails.module.css';
import { sortCountryProps } from '@services/filterTable/type';

const SortRegionDetails: React.FC<sortCountryProps> = ({
  regions,
  handelSortRegion,
}) => {
  console.log('SortRegionDetails');
  return (
    <div>
      <select
        className={styles['country-list-container']}
        id="countryList"
        onChange={(ev) => handelSortRegion(ev)}
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

export default SortRegionDetails;
