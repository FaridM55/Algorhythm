import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  reducerPath: 'api',
  endpoints: () => ({}),
  tagTypes: [],
});

export default api;
