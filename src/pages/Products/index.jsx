import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, Container, Pagination, Box, Typography } from '@mui/material';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ProductBlock from '@/components/ProductBlock';
import ProductToolbar from '@/components/ProductToolbar';
import { useGetProductsQuery } from '@/api/productsApi';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    sortBy: searchParams.get('sortBy') || '',
    order: searchParams.get('order') || '',
    page: parseInt(searchParams.get('page')) || 1,
    limit: 9,
  };

  const debouncedSearch = useDebounce(filters.search, 500);

  const { data, isLoading } = useGetProductsQuery({
    ...filters,
    search: debouncedSearch,
    skip: (filters.page - 1) * filters.limit,
  });

  const products = data?.products || [];
  const totalCount = data?.total || 0;

  const handleFilterChange = useCallback(
    newValues => {
      const params = Object.fromEntries(searchParams.entries());

      const updated = { ...params, ...newValues };

      if (newValues.search !== undefined || newValues.category !== undefined) {
        updated.page = '1';
      }

      Object.keys(updated).forEach(key => {
        if (!updated[key]) delete updated[key];
      });

      setSearchParams(updated);
    },
    [searchParams, setSearchParams],
  );

  const handlePageChange = useCallback(
    (_, value) => {
      handleFilterChange({ page: value.toString() });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [handleFilterChange],
  );

  return (
    <>
      <AppBreadcrumbs items={['Products']} />
      <Container fixed sx={{ pb: 8 }}>
        <ProductToolbar filters={filters} onFilterChange={handleFilterChange} />
        <Grid container spacing={4} justifyContent="center">
          <ProductBlock
            products={products}
            isLoading={isLoading}
            limit={filters.limit}
          />

          {!isLoading && products.length === 0 && (
            <Grid item xs={12}>
              <Typography align="center" py={10} color="text.secondary">
                No items found
              </Typography>
            </Grid>
          )}
        </Grid>

        {totalCount > filters.limit && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination
              count={Math.ceil(totalCount / filters.limit)}
              page={filters.page}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default Products;
