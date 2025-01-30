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

      this.setState({ people: peopleList });
      this.setState({ errorApi: false });

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
    console.log(people, 'onSearch people');
    if (!people) return;
    const filterPeople = people.filter((person) =>
      person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    console.log(filterPeople, 'filterPeople');
    this.setState({ people: filterPeople });
  };

  render(): ReactNode {
    const { people, errorApi } = this.state;
    return (
      <div className={styles['main_people-container']}>
        <Search onSearch={this.onSearch} />
        {errorApi ? (
          <NoFiles />
        ) : people ? (
          <PeopleList people={people} />
        ) : (
          <Spinner />
        )}
        <div className={styles['people']}></div>
      </div>
    );
  }
}

export default PeoplePage;
