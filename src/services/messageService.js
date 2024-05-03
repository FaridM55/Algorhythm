import api from './api';

const messageService = api.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (body) => ({
        url: '/message',
        method: 'POST',
        body,
      }),
    }),

    getMessages: builder.query({
      query: (id) => ({
        url: `/message/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = messageService;
