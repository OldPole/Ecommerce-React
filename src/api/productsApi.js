import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './config';
import { API_ENDPOINTS } from './api';

export const productsApi = createApi({
  baseQuery,
  reducerPath: 'productsApi',
  endpoints: build => ({
    getProducts: build.query({
      query: ({ page = 1, limit = 9 }) => {
        const skip = (page - 1) * limit;
        return `${API_ENDPOINTS.PRODUCTS}?limit=${limit}&skip=${skip}`;
      },
      transformResponse: response => ({
        products: response.products || [],
        total: response.total || 0,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
