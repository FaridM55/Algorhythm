import api from './api';

const conversationService = api.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: () => ({
        url: '/conversation',
        method: 'GET',
      }),
      providesTags: ['CONVERSATION'],
    }),
    createConversation: builder.mutation({
      query: (body) => ({
        url: '/conversation/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['CONVERSATION'],
    }),
    getConversation: builder.query({
      query: (id) => ({
        url: `/conversation/${id}`,
        method: 'GET',
      }),
    }),
    deleteConversation: builder.mutation({
      query: (id) => ({
        url: `/conversation/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetConversationsQuery,
  useCreateConversationMutation,
  useGetConversationQuery,
  useDeleteConversationMutation,
} = conversationService;

export default conversationService;
