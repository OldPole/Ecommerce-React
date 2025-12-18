import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from './api';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
