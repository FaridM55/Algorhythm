import api from './api';

const submissionService = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubmissions: builder.query({
      query: () => ({
        url: '/submission',
        method: 'GET',
      }),
    }),
    getSubmission: builder.query({
      query: (id) => ({
        url: `/submission/${id}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetSubmissionsQuery, useGetSubmissionQuery } = submissionService;

export default submissionService;
