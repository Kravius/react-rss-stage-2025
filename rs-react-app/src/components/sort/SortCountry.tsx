import { setCountryProps } from '@services/filterTable/type';

const SortName: React.FC<setCountryProps> = ({ handelSortName }) => {
  return (
    <div>
      <input
        placeholder="search by name"
        onChange={(ev) => handelSortName(ev.target.value || '')}
      />
    </div>
  );
};

export default SortName;
