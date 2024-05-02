import api from './api';

const difficultyService = api.injectEndpoints({
  endpoints: (builder) => ({
    getDifficulties: builder.query({
      query: () => ({
        url: '/algorithmtag',
        method: 'GET',
      }),

      providesTags: ['TAG'],
    }),

    createDifficulty: builder.mutation({
      query: (body) => ({
        url: `/algorithmtag?tag=${body.tag}`,
        method: 'POST',
        body,
      }),

      invalidatesTags: ['TAG'],
    }),

    getDifficulty: builder.query({
      query: (name) => ({
        url: `/difficulty/${name}`,
        method: 'GET',
      }),

      providesTags: ['TAG'],
    }),

    deleteDifficulty: builder.mutation({
      query: (name) => ({
        url: `/algorithmtag/delete?tag=${name}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['TAG'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetDifficultiesQuery,
  useCreateDifficultyMutation,
  useGetDifficultyQuery,
  useDeleteDifficultyMutation,
} = difficultyService;

export default difficultyService;
