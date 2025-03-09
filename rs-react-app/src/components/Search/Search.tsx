import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useSearchTerm from '@services/customHook/useSearchTerm';
import React from 'react';
import useQueryParams from '@services/customHook/useQueryparams';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useSearchTerm();
  const { setQuery, removeParam, goHome } = useQueryParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm !== '') {
      setQuery('search', searchTerm);
      setIsLoading(true);
    } else {
      removeParam('search');
    }
    setIsLoading(false);
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
      <button onClick={() => goHome()}>Home Page</button>
    </div>
  );
};

export default Search;
