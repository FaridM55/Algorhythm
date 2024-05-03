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

      invalidatesTags: ['ALGORITHM'],
    }),

    algorithmAddTestCase: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/algorithms/${id}/addTestCase`,
        method: 'POST',
        body,
      }),

      invalidatesTags: ['ALGORITHM'],
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

      invalidatesTags: ['ALGORITHM'],
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

      providesTags: ['ALGORITHM'],
    }),

    updateAlgorithm: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/algorithms/${id}?${new URLSearchParams(body).toString()}`,
        method: 'PUT',
      }),

      invalidatesTags: ['ALGORITHM'],
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
