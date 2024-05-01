import api from './api';

const difficultyService = api.injectEndpoints({
  endpoints: (builder) => ({
    getDifficulties: builder.query({
      query: () => ({
        url: '/algorithmtag',
        method: 'GET',
      }),
    }),

    createDifficulty: builder.mutation({
      query: (body) => ({
        url: '/difficulty',
        method: 'POST',
        body,
      }),
    }),

    getDifficulty: builder.query({
      query: (name) => ({
        url: `/difficulty/${name}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetDifficultiesQuery, useCreateDifficultyMutation, useGetDifficultyQuery } =
  difficultyService;

export default difficultyService;
