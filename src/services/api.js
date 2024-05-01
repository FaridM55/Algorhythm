import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/config';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
      if (token) {
        console.log(token);
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: 'api',
  endpoints: () => ({}),
  tagTypes: ['USER'],
});

export default api;
