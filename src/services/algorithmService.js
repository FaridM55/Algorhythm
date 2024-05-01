import api from './api';

const algorithmService = api.injectEndpoints({
  endpoints: (build) => ({
    getAlgorithms: build.query({
      query: () => ({
        url: '/algorithms',
      }),
    }),

    createaAlgorithm: build.mutation({
      query: (body) => ({
        url: '/algorithms/create',
        method: 'POST',
        body,
      }),
    }),

    algorithmAddTestCase: build.mutation({
      query: ({ id, body }) => ({
        url: `/algorithms/{$id}/addTestCase`,
        method: 'POST',
        body,
      }),
    }),

    algorithmSubmit: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/algorithms/${id}/submit?programmingLanguages=${body?.programmingLanguages}&solutionCode=${body?.solutionCode}`,
        method: 'POST',
        // body,
      }),
    }),

    deleteAlgorithm: build.mutation({
      query: (id) => ({
        url: `/algorithms/${id}`,
        method: 'DELETE',
      }),
    }),

    getAlgorithm: build.query({
      query: (id) => ({
        url: `/algorithms/${id}`,
      }),
    }),

    updateAlgorithm: build.mutation({
      query: ({ id, body }) => ({
        url: `/algorithms/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAlgorithmsQuery,
  useCreateaAlgorithmMutation,
  useAlgorithmAddTestCaseMutation,
  useAlgorithmSubmitMutation,
  useDeleteAlgorithmMutation,
  useGetAlgorithmQuery,
  useUpdateAlgorithmMutation,
} = algorithmService;

export default algorithmService;
