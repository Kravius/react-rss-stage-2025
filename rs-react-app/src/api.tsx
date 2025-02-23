import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from './constants/api';

// export async function getApiResource(url: string) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       console.log(`Error: ${response.status}`);
//       return false;
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(`Error: ${error}`);
//     return false;
//   }
// }

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_ROOT }),
  endpoints: () => ({}),
});
