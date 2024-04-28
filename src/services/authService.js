import api from './api';

const authService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    reset: builder.mutation({
      query: (body) => ({
        url: '/auth/reset',
        method: 'POST',
        body,
      }),
    }),
    user: builder.query({
      query: () => ({
        url: '/auth/user',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useRegisterMutation, useResetMutation, useUserQuery } =
  authService;

export default authService;
