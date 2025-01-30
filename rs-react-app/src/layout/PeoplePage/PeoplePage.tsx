import styles from './peoplePage.module.css';

import { Component, ReactNode } from 'react';

import { getApiResource } from '../../api';
import { API_ROOT } from '../../constants/api';
import NoFiles from '../../components/NoFiles';
import { getPeopleId, getPeopleImg } from '../../services/getData';
import PeopleList from '../../components/PeopleList/PeopleList';

//type
import { PeopleResponse, Person, PersonToRender, State } from './type';

class PeoplePage extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: null,
    };
  }

  componentDidMount() {
    this.getResource(API_ROOT);
  }

  getResource = async (url: string) => {
    const res: PeopleResponse = await getApiResource(url);

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
  };

  render(): ReactNode {
    const { people } = this.state;
    return (
      <>
        <div className={styles['main_people-container']}>
          {people ? <PeopleList people={people} /> : <NoFiles />}
        </div>
      </>
    );
  }
}

export default PeoplePage;
