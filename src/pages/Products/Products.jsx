import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';

import { apiResources } from '@/utils/network';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import ProductBlock from '@/components/ProductBlock';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getResources = async url => {
    const { products } = await apiResources(url);

    if (products) {
      setProducts(products);
      console.log(products);
    } else {
      // Error
    }
  };

  useEffect(() => {
    getResources('https://dummyjson.com/products');
  }, []);

  const productsList = products.map(props => (
    <ProductBlock key={props.id} {...props} />
  ));

  return (
    <>
      <AppBreadcrumbs items={['Products']} />
      <Container fixed>
        <Grid container spacing={5} sx={{ py: 5 }} justifyContent={'center'}>
          {products.length && productsList}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
