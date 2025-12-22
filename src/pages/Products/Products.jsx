import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Container, Pagination, Box, Typography } from '@mui/material';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ProductBlock from '@/components/ProductBlock';
import SkeletonProduct from '@/components/ProductBlock/Skeleton';
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
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sortBy: '',
    order: '',
    page: 1,
    limit: 9,
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  const { data, isLoading } = useGetProductsQuery({
    ...filters,
    search: debouncedSearch,
    skip: (filters.page - 1) * filters.limit,
  });

  const products = data?.products || [];
  const totalCount = data?.total || 0;

  const handleFilterChange = useCallback(newValues => {
    setFilters(prev => ({ ...prev, ...newValues }));
  }, []);

  const handlePageChange = useCallback(
    (_, value) => {
      handleFilterChange({ page: value });
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
          {isLoading ? (
            [...Array(filters.limit)].map((_, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={i}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <SkeletonProduct />
              </Grid>
            ))
          ) : products.length > 0 ? (
            products.map(product => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={product.id}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <ProductBlock {...product} />
              </Grid>
            ))
          ) : (
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
