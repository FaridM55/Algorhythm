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
  }),
});
