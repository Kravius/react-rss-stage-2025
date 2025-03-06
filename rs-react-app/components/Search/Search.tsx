import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useSearchTerm from '@services/customHook/useSearchTerm';

import useQueryParams from '@services/customHook/useQueryparams';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useSearchTerm();
  const { query, setQuery, removeParam } = useQueryParams();
  const [isLoading, setIsLoading] = useState(false);
  // const [, setSearchParams] = useSearchParams();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm !== '') {
      setQuery('search', searchTerm);
      setIsLoading(true);
      // setSearchParams((prev) => ({
      //   ...Object.fromEntries(prev),
      //   search: searchTerm,
      // }));
    } else {
      removeParam('search');
      // setQuery((prev) => {
      //   const updateParams = new URLSearchParams(prev);
      //   updateParams.delete('search');
      //   return updateParams;
      // });
    }
    setIsLoading(true);
  };

  useEffect(() => {
    if (searchTerm) {
      setQuery('search', searchTerm);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search People"
        />
        <button disabled={isLoading ? true : false} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
