import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import {
  LocalShippingOutlined,
  StarsOutlined,
  VerifiedUserOutlined,
} from '@mui/icons-material';

import ProductBlock from '@/components/ProductBlock';
import { useGetProductsQuery } from '@/api/productsApi';

const features = [
  {
    icon: <LocalShippingOutlined sx={{ fontSize: 32 }} />,
    title: 'Free Shipping',
    desc: 'Upgrade your style today and get FREE shipping on all orders!',
  },
  {
    icon: <StarsOutlined sx={{ fontSize: 32 }} />,
    title: 'Satisfaction Guarantee',
    desc: 'Shop confidently with our Satisfaction Guarantee.',
  },
  {
    icon: <VerifiedUserOutlined sx={{ fontSize: 32 }} />,
    title: 'Secure Payment',
    desc: 'Your security is our priority. Your payments are secure.',
  },
];

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({
    limit: 6,
    skip: 0,
    category: 'mens-shirts',
  });

  console.log('Products Data:', data);

  const products = data?.products || [];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Best Selling
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <ProductBlock products={products} isLoading={isLoading} limit={6} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
