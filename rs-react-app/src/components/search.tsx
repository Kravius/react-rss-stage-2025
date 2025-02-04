import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Form, useSubmit } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const submit = useSubmit();

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('searchTerm');
    if (savedSearchValue) {
      const searchValue = JSON.parse(savedSearchValue);
      setSearchTerm(searchValue);
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit({ searchTerm }, { method: 'post' });
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
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
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

export default Search;
