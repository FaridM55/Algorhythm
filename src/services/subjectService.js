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
    getSubject: build.query({
      query: (id) => ({
        url: `/subjects/${id}`,
        method: 'GET',
      }),
      providesTags: ['SUBJECT'],
    }),
    updateSubject: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/subjects/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['SUBJECT'],
    }),
    linkAlgoritmToSubject: build.mutation({
      query: ({ subjectId, id }) => ({
        url: `/subjects/${subjectId}/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['SUBJECT'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetSubjectsQuery,
  useCreateSubjectMutation,
  useDeleteSubjectMutation,
  useGetSubjectQuery,
  useUpdateSubjectMutation,
  useLinkAlgoritmToSubjectMutation,
} = subjectService;

export default subjectService;
