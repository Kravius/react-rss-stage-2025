import { PeopleResponse, Person, PersonToRender } from 'src/type/type';
import {
  getPage,
  getPeopleId,
  getPeopleImg,
} from '@services/changeData/changeData';

export interface Pages {
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
