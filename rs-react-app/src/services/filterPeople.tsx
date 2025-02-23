import {
  PeopleResponse,
  Person,
  PersonToRender,
} from '../layout/PeoplePage/type';
import { getPage, getPeopleId, getPeopleImg } from './getData';

interface Pages {
  next: string | null;
  previous: string | null;
}

const pages: Pages = { next: null, previous: null };

export const newFilterPeopleData = (data: PeopleResponse | undefined) => {
  const people: PersonToRender[] | undefined = data?.results.map(
    (person: Person) => {
      const id = getPeopleId(person.url);
      const img = getPeopleImg(id);
      return {
        ...person,
        id,
        img,
      };
    }
  );

  if (data) {
    pages.next = getPage(data.next);
    pages.previous = getPage(data.previous);
  }
  return { people, pages };
};

// export const getPerson = async ({
//   id,
//   page,
// }: {
//   id: string;
//   page?: string;
// }) => {
//   const storedPeople = localStorage.getItem('peopleData');
//   if (storedPeople) {
//     const peopleList: PersonToRender[] = JSON.parse(storedPeople);
//     const person = peopleList.find((el) => el.id === id);
//     return person;
//   }

//   //peopleListWithAllData что бы получить полный массив
//   // const newPeopleList = await peopleListWithAllData(page);

//   // console.log(newPeopleList, 'person');
//   // const person = newPeopleList.peopleList.find((el) => el.id === id);
//   // return person;
//   return '';
// };
