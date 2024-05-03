import api from './api';

const messageService = api.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/message/conversation/${id}`,
        method: 'GET',
      }),

      providesTags: ['MESSAGE'],
    }),

    sendMessage: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/message/${id}`,
        method: 'POST',
        body,
      }),

      invalidatesTags: ['MESSAGE'],
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = messageService;
