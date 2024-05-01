import api from './api';

const algorithmService = api.injectEndpoints({
  endpoints: (build) => ({
    getAlgorithms: build.query({
      query: () => ({
        url: '/algorithms',
      }),
      providesTags: ['ALGORITHM'],
    }),

    createaAlgorithm: build.mutation({
      query: (body) => ({
        url: '/algorithms/create',
        method: 'POST',
        body,
      }),
    }),

    algorithmAddTestCase: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/algorithms/${id}/addTestCase`,
        method: 'POST',
        body,
      }),
    }),

    algorithmSubmit: build.mutation({
      query: ({ id, ...body }) => {
        console.log(new URLSearchParams(body).toString());
        return {
          url: `/algorithms/${id}/submit?${new URLSearchParams(body).toString()}`,
          method: 'POST',
          // body,
        };
      },
    }),

    deleteAlgorithm: build.mutation({
      query: (id) => ({
        url: `/algorithms/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ALGORITHM'],
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
