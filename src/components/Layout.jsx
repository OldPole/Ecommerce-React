import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './ui/Footer';
import Header from './ui/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
