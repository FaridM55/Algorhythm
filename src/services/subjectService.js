import api from './api';

const subjectService = api.injectEndpoints({
  endpoints: (build) => ({
    getSubjects: build.query({
      query: () => ({
        url: '/subjects',
        method: 'GET',
      }),
      providesTags: ['SUBJECT'],
    }),
    createSubject: build.mutation({
      query: (body) => ({
        url: '/subjects/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['SUBJECT'],
    }),
    deleteSubject: build.mutation({
      query: (id) => ({
        url: `/subjects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['SUBJECT'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetSubjectsQuery, useCreateSubjectMutation, useDeleteSubjectMutation } =
  subjectService;

export default subjectService;
