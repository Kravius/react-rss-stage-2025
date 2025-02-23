import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from './constants/api';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_ROOT }),
  endpoints: () => ({}),
});
