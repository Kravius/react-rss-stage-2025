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
  return '';
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

const peopleListWithAllData = async (page?: string) => {
  const url = page ? page : API_ROOT;
  console.log(page, 'peopleListWithAllData');
  const res: PeopleResponse = await getApiResource(url);
  console.log(res, 'res');
  const peopleList: PersonToRender[] = res.results.map((person: Person) => {
    const id = getPeopleId(person.url);
    const img = getPeopleImg(id);
    return {
      ...person,
      id,
      img,
    };
  });
  const next = res.next;
  const previous = res.previous;
  return { peopleList, next, previous };
};

export const filterPeople = async (searchTerm?: string, page?: string) => {
  const takeSearchTerm = searchTerm ? searchTerm : localStorageGetSearch();
  const { peopleList, next, previous } = await peopleListWithAllData(page);
  if (takeSearchTerm) {
    const newPeopleList = peopleList.filter((person) =>
      person.name.toLowerCase().includes(takeSearchTerm.toLowerCase())
    );
    return { newPeopleList, next, previous };
  } else {
    const newPeopleList = peopleList;
    return { newPeopleList, next, previous };
  }
};

export const getPerson = async (id: string) => {
  const storedPeople = localStorage.getItem('peopleData');
  if (storedPeople) {
    const peopleList: PersonToRender[] = JSON.parse(storedPeople);
    const person = peopleList.find((el) => el.id === id);
    if (person) return person;
  }

  //peopleListWithAllData что бы получить полный массив
  const newPeopleList = (await peopleListWithAllData()).peopleList.find(
    (el) => el.id === id
  );
  return newPeopleList;
};
