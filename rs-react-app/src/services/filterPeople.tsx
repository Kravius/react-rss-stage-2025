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

const peopleListWithAllData = async (page?: string) => {
  const url = `${API_ROOT}/?page=${page}`;
  const res: PeopleResponse = await getApiResource(url);
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

  return { peopleList, pages };
};

export const filterPeople = async ({
  searchTerm,
  page,
}: {
  searchTerm: string;
  page: string;
}) => {
  const takeSearchTerm = searchTerm ? searchTerm : localStorageGetSearch();
  const { peopleList, pages } = await peopleListWithAllData(page);
  if (takeSearchTerm) {
    const newPeopleList = peopleList.filter((person) =>
      person.name.toLowerCase().includes(takeSearchTerm.toLowerCase())
    );
    return { newPeopleList, pages };
  } else {
    const newPeopleList = peopleList;
    return { newPeopleList, pages };
  }
};

export const getPerson = async ({
  id,
  page,
}: {
  id: string;
  page?: string;
}) => {
  console.log(page, 'getPerson');
  const storedPeople = localStorage.getItem('peopleData');
  if (storedPeople) {
    const peopleList: PersonToRender[] = JSON.parse(storedPeople);
    const person = peopleList.find((el) => el.id === id);
    return person;
  }

  //peopleListWithAllData что бы получить полный массив
  // const newPeopleList = await peopleListWithAllData(page);

  // console.log(newPeopleList, 'person');
  // const person = newPeopleList.peopleList.find((el) => el.id === id);
  // return person;
  return '';
};
