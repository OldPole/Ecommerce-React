import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, Container, Pagination } from '@mui/material';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ProductBlock from '@/components/ProductBlock';
import SkeletonProduct from '@/components/ProductBlock/Skeleton';
import { useGetProductsQuery } from '@/api/productsApi';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const limit = 9;

  const { data, isLoading } = useGetProductsQuery({
    page: currentPage,
    limit,
  });

  const products = data?.products || [];
  const totalProducts = data?.total || 194;

  const handlePageChange = useCallback(
    (event, value) => {
      setSearchParams({ page: value.toString() });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setSearchParams],
  );

  const productsList = products.map(props => (
    <ProductBlock key={props.id} {...props} />
  ));

  const skeletonList = [...Array(limit)].map((_, index) => (
    <SkeletonProduct key={index} />
  ));

  return (
    <>
      <AppBreadcrumbs items={['Products']} />
      <Container fixed>
        <Grid container spacing={5} sx={{ py: 5 }} justifyContent="center">
          {isLoading ? skeletonList : productsList}
        </Grid>

        <Pagination
          count={Math.ceil(totalProducts / limit)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </Container>
    </>
  );
};

export default Products;
