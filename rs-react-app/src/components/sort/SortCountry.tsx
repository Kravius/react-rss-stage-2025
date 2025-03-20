import { setCountryProps } from '@services/filterTable/type';

const SortName: React.FC<setCountryProps> = ({ handelSort }) => {
  return (
    <div>
      <input
        placeholder="search by name"
        onChange={(ev) => handelSort('name', ev.target.value || '')}
      />
    </div>
  );
};

export default SortName;
