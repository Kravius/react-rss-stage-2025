import styles from './peoplePage.module.css';

import { Component, ReactNode } from 'react';

import { getApiResource } from '../../api';
import { API_ROOT } from '../../constants/api';
import NoFiles from '../../components/ErrorMessage';
import { getPeopleId, getPeopleImg } from '../../services/getData';
import PeopleList from '../../components/PeopleList/PeopleList';

//type
import { PeopleResponse, Person, PersonToRender, State } from './type';
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/search';
import { ErrorBTN } from '../../components/ErrorBtn/ErrorBtn';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';

class PeoplePage extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: null,
      errorApi: false,
      filterPeople: null,
    };
  }

  componentDidMount() {
    this.getResource(API_ROOT);
  }

  getResource = async (url: string) => {
    const res: PeopleResponse = await getApiResource(url);

    if (res) {
      const peopleList: PersonToRender[] = res.results.map((person: Person) => {
        const id = getPeopleId(person.url);
        const img = getPeopleImg(id);
        return {
          name: person.name,
          id,
          img,
        };
      });
      this.setState({ ...this.state, people: peopleList, errorApi: false });
      this.checkLocalStorage();
    } else {
      this.setState({ errorApi: true });
    }
  };

  checkLocalStorage() {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
      this.onSearch(JSON.parse(searchTerm));
    }
  }

  onSearch = (searchTerm: string) => {
    const { people } = this.state;
    if (!people) return;

    const filterPeople = people.filter((person) =>
      person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    this.setState({ filterPeople: filterPeople });
  };

  render(): ReactNode {
    const { filterPeople, errorApi } = this.state;
    return (
      <ErrorBoundary>
        <div className={styles['main_people-container']}>
          <Search onSearch={this.onSearch} />
          {errorApi ? (
            <NoFiles />
          ) : filterPeople ? (
            <PeopleList people={filterPeople} />
          ) : (
            <Spinner />
          )}
          <div className={styles['people']}></div>
          <ErrorBTN>Make Error</ErrorBTN>
        </div>
      </ErrorBoundary>
    );
  }
}

export default PeoplePage;
