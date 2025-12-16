import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
