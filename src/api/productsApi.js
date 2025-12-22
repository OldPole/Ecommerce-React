import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './config';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => 'products/category-list',
    }),
    getProducts: builder.query({
      query: ({ search, category, sortBy, order, limit, skip }) => {
        let queryStr = `limit=${limit}&skip=${skip}`;
        if (sortBy) queryStr += `&sortBy=${sortBy}&order=${order || 'asc'}`;

        if (search) return `products/search?q=${search}&${queryStr}`;
        if (category) return `products/category/${category}?${queryStr}`;

        return `products?${queryStr}`;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
