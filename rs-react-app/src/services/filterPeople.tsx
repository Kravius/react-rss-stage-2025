import { getApiResource } from '../api';
import { API_ROOT } from '../constants/api';
import {
  PeopleResponse,
  Person,
  PersonToRender,
} from '../layout/PeoplePage/type';
import { getPeopleId, getPeopleImg } from './getData';

const localStorageGetSearch = () => {
  const savedSearchValue = localStorage.getItem('searchTerm');
  if (savedSearchValue) {
    return JSON.parse(savedSearchValue);
  }
  return false;
};

// const filterPeople = (res: PeopleResponse) => {
//   const peopleList: PersonToRender[] = res.results.map((person: Person) => {
//     const id = getPeopleId(person.url);
//     const img = getPeopleImg(id);
//     return {
//       name: person.name,
//       id,
//       img,
//     };
//   });
//   return peopleList;
//   // setPeople(peopleList);
//   // setFilterPeople(peopleList);
//   // setErrorApi(false);
//   // checkLocalStorage(peopleList);

//   //after add this
//   // setNextPage({ next: res.next });
//   // setPreviousprevious({ previous: res.previous });
// };

const peopleListWithAllData = async () => {
  const res: PeopleResponse = await getApiResource(API_ROOT);

  const peopleList: PersonToRender[] = res.results.map((person: Person) => {
    const id = getPeopleId(person.url);
    const img = getPeopleImg(id);
    return {
      name: person.name,
      id,
      img,
    };
  });
  console.log(peopleList, 'peopleList');
  const next = res.next;
  const previous = res.previous;
  return { peopleList, next, previous };
};

export const filterPeople = async (searchTerm?: string) => {
  const takeSearchTerm = searchTerm ? searchTerm : localStorageGetSearch();
  const { peopleList, next, previous } = await peopleListWithAllData();
  if (takeSearchTerm) {
    const newPeopleList = peopleList.filter((person) =>
      person.name.toLowerCase().includes(takeSearchTerm.toLowerCase())
    );
    console.log(newPeopleList, 'filterPeople');
    return { newPeopleList, next, previous };
  } else {
    const newPeopleList = peopleList;
    return { newPeopleList, next, previous };
  }
};
