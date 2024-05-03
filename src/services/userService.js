import api from './api';

const userService = api.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),

      providesTags: ['USER'],
    }),

    users: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),

    solutionCount: builder.query({
      query: () => ({
        url: '/user/solutioncount',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useMeQuery, useUsersQuery, useSolutionCountQuery } = userService;

export default userService;
