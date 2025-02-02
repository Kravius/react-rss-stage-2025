import { Component, ChangeEvent, FormEvent } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchState {
  searchTerm: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.trim();
    this.setState({ searchTerm });
  };

  handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
    this.props.onSearch(searchTerm);
  };

  componentDidMount() {
    const savedSearchValue = localStorage.getItem('searchTerm');
    if (savedSearchValue) {
      const searchValue = JSON.parse(savedSearchValue);
      this.setState({ searchTerm: searchValue }, () =>
        this.props.onSearch(searchValue)
      );
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleInputChange}
            placeholder="Search People"
          />
          <button type="submit">search</button>
        </form>
      </div>
    );
  }
}

export default Search;
