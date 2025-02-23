import { ChangeEvent, FormEvent, useEffect } from 'react';
import { Form, useNavigation, useSearchParams } from 'react-router-dom';
import useSearchTerm from '../../services/customHook/useSearchTerm';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useSearchTerm();
  const [, setSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm !== '') {
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        searchTerm: searchTerm,
      }));
    } else {
      setSearchParams((prev) => {
        const updateParams = new URLSearchParams(prev);
        updateParams.delete('searchTerm');
        return updateParams;
      });
    }
  };
  console.log(searchTerm);
  useEffect(() => {
    if (searchTerm) {
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        searchTerm: searchTerm,
      }));
    }
  }, []);

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
