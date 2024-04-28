import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/config';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  reducerPath: 'api',
  endpoints: () => ({}),
  tagTypes: [],
});

export default api;
