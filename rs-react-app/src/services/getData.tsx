import { baseApi } from '../api';

import {
  PeopleResponse,
  Person,
  SearchParams,
} from '../layout/PeoplePage/type';

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
