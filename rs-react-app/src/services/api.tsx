import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from '@constants/api';

//RTK Query
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_ROOT }),
  endpoints: () => ({}),
});

//next fetch
import { PeopleResponse } from '@type/type';

export async function getServerSideProps(
  page: string = '1',
  search: string = ''
): Promise<PeopleResponse> {
  const res = await fetch(`${API_ROOT}/?page=${page}&search=${search}`);
  return res.json();
}
