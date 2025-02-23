import { baseApi } from '../api';

import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  VISUALGUIDE_ROOT_IMG,
} from '../constants/api';
import {
  PeopleResponse,
  Person,
  SearchParams,
} from '../layout/PeoplePage/type';

export const getPeopleId = (url: string) => {
  return getID(url);
};

const getID = (url: string) => {
  const id = url.replace(SWAPI_ROOT + SWAPI_PEOPLE, '').replace(/\//g, '');
  return id;
};

export function getPeopleImg(id: string) {
  return `${VISUALGUIDE_ROOT_IMG}/${id}.jpg`;
}

export const getPage = (fullUrl: string | null) => {
  if (!fullUrl) return null;
  else {
    const page = new URL(fullUrl);
    return page.searchParams.get('page');
  }
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getUsers: create.query<PeopleResponse, undefined>({
      query: () => '',
    }),
    getUsersByParamsSearch: create.query<PeopleResponse, SearchParams>({
      query: (params) => {
        const { page = '1', search = '' } = params || {};
        return {
          url: '',
          params: {
            page,
            search,
          },
        };
      },
    }),
    getPersonById: create.query<Person, SearchParams>({
      query: (params) => {
        return {
          url: `${params.id}`,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersByParamsSearchQuery, useGetPersonByIdQuery } =
  userApi;
