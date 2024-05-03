import api from './api';

const contactService = api.injectEndpoints({
  endpoints: (build) => ({
    sendContact: build.mutation({
      query: (data) => ({
        url: '/contact',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendContactMutation } = contactService;

export default contactService;
