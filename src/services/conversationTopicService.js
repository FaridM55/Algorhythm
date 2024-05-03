import api from './api';

const conversationTopicService = api.injectEndpoints({
  endpoints: (builder) => ({
    getConversationTopics: builder.query({
      query: () => ({
        url: '/conversationtopic',
        method: 'GET',
      }),
      providesTags: ['CONVERSATIONTOPIC'],
    }),
    createConversationTopic: builder.mutation({
      query: (body) => ({
        url: '/conversationtopic/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['CONVERSATIONTOPIC'],
    }),
    updateConversationTopic: builder.mutation({
      query: ({ id, body }) => ({
        url: `/conversationtopic/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['CONVERSATIONTOPIC'],
    }),
    deleteConversationTopic: builder.mutation({
      query: (id) => ({
        url: `/conversationtopic/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CONVERSATIONTOPIC'],
    }),
    getConversationTopic: builder.query({
      query: (id) => ({
        url: `/conversationtopic/${id}`,
        method: 'GET',
      }),
      providesTags: ['CONVERSATIONTOPIC'],
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
