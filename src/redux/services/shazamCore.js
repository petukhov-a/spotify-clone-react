import { createApi, fectBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8a1696eeacmsh845bed4a1c8c5dap1a7564jsnd4463981a39b');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/track' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
