import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosInstance from './axiosInterceptor';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
