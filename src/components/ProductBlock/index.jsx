import React from 'react';
import { Grid } from '@mui/material';

import ProductCard from '@/elements/ProductCard';
import SkeletonProduct from '@/elements/ProductCard/Skeleton';

const ProductBlock = ({ products = [], isLoading, limit = 9 }) => {
  const items = isLoading ? [...Array(limit)] : products;

  return (
    <>
      {items.map((item, index) => (
        <Grid
          item
          key={isLoading ? index : item.id}
          xs={12}
          sm={6}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {isLoading ? <SkeletonProduct /> : <ProductCard {...item} />}
        </Grid>
      ))}
    </>
  );
};

export default ProductBlock;
