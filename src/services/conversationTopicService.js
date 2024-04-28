import api from './api';

const conversationTopicService = api.injectEndpoints({
  endpoints: (builder) => ({
    getConversationTopics: builder.query({
      query: () => ({
        url: '/conversationtopic',
        method: 'GET',
      }),
    }),
    createConversationTopic: builder.mutation({
      query: (body) => ({
        url: '/conversationtopic/create',
        method: 'POST',
        body,
      }),
    }),
    updateConversationTopic: builder.mutation({
      query: ({ id, body }) => ({
        url: `/conversationtopic/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteConversationTopic: builder.mutation({
      query: (id) => ({
        url: `/conversationtopic/${id}`,
        method: 'DELETE',
      }),
    }),
    getConversationTopic: builder.query({
      query: (id) => ({
        url: `/conversationtopic/${id}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetConversationTopicsQuery,
  useCreateConversationTopicMutation,
  useUpdateConversationTopicMutation,
  useDeleteConversationTopicMutation,
  useGetConversationTopicQuery,
} = conversationTopicService;

export default conversationTopicService;
