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
  try {
    const res = await fetch(`${API_ROOT}/?page=${page}&search=${search}`, {
      cache: 'force-cache',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
  }
  return {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };
}
