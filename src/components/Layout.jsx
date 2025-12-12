import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './ui/Footer';
import Header from './ui/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
