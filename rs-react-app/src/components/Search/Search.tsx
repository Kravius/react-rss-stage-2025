import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Form, useNavigation, useSearchParams } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('searchTerm');
    if (savedSearchValue) {
      const searchValue = JSON.parse(savedSearchValue);

      setSearchTerm(searchValue);
    }
  }, [searchParams]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm));

    if (searchTerm !== '') {
      setSearchParams({ searchTerm: searchTerm });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search People"
        />
        <button
          disabled={navigation.state === 'loading' ? true : false}
          type="submit"
        >
          Search
        </button>
      </Form>
    </div>
  );
};

export default Search;
