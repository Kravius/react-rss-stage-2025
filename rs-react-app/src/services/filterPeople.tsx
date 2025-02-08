import { getApiResource } from '../api';
import { API_ROOT } from '../constants/api';
import {
  PeopleResponse,
  Person,
  PersonToRender,
} from '../layout/PeoplePage/type';
import { getPage, getPeopleId, getPeopleImg } from './getData';

interface Pages {
  next: string | null;
  previous: string | null;
  current: string;
}

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
  const url = `${API_ROOT}/?page=${page}`;
  // console.log(page, 'peopleListWithAllData');
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

  const pages: Pages = {
    next: getPage(res.next),
    previous: getPage(res.previous),
    current: '1',
  };

  const next = res.next;
  const previous = res.previous;

  // if (next && previous) {
  //   pages.current = (+next - +previous).toString();
  // }

  const current = pages.current;
  // if (pages.next && pages.previous) {
  //   pages.current:pages.next - pages.previous;
  // }
  return { peopleList, next, previous, current, pages };
};

export const filterPeople = async (searchTerm?: string, page?: string) => {
  const takeSearchTerm = searchTerm ? searchTerm : localStorageGetSearch();
  const { peopleList, next, previous, pages } =
    await peopleListWithAllData(page);
  if (takeSearchTerm) {
    const newPeopleList = peopleList.filter((person) =>
      person.name.toLowerCase().includes(takeSearchTerm.toLowerCase())
    );
    return { newPeopleList, next, previous, pages };
  } else {
    const newPeopleList = peopleList;
    return { newPeopleList, next, previous, pages };
  }
};

// export const getPerson = async ({ id, page }: { id: string; page: string }) => {
export const getPerson = async (id: string) => {
  const storedPeople = localStorage.getItem('peopleData');
  if (storedPeople) {
    const peopleList: PersonToRender[] = JSON.parse(storedPeople);
    const person = peopleList.find((el) => el.id === id);
    if (person) return person;
  }

  //peopleListWithAllData что бы получить полный массив
  console.log(id, 'id');
  const newPeopleList = await peopleListWithAllData();

  console.log(newPeopleList, 'person');
  const person = newPeopleList.peopleList.find((el) => el.id === id);
  return person;
  return newPeopleList;
};
