import api from './api';

const authService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['USER'],
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
    verify: builder.mutation({
      query: (body) => ({
        url: '/auth/verification/verify',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResetMutation,
  useUserQuery,
  useVerifyMutation,
} = authService;

export default authService;
