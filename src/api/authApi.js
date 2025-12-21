import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: newUser => ({
        url: 'users/add',
        method: 'POST',
        body: newUser,
      }),
    }),

    getMe: builder.query({
      query: () => 'auth/me',
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } = authApi;
