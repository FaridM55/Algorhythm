import api from './api';

const adminService = api.injectEndpoints({
  endpoints: (build) => ({
    getClients: build.query({
      query: () => ({
        url: '/clients',
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
});

export const { useGetClientsQuery } = adminService;

export default adminService;
