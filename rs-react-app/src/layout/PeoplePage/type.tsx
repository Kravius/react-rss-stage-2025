export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Person {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url: string;
}

export interface PersonToRender extends Omit<Person, 'url'> {
  id: string;
  img: string;
  // previous: string;
  // next: string;
}

export interface State {
  people: PersonToRender[] | null;
  errorApi: boolean;
  filterPeople: PersonToRender[] | null;
}

export type PeopleResponse = ApiResponse<Person>;
