import React, { Suspense } from 'react';

import Layout from '@/layouts/Layout';
import { About } from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import NotFoundPage from '@/pages/NotFoundPage';

export const AppRoutes = {
  default: '/',
  products: '/products',
  productdetail: '/product/:id',
  about: '/about',
  signup: '/signup',
  login: '/login',
  resetpassword: '/resetpassword',
  forgotpassword: '/forgotpassword',
  notfound: '*',
};

const routes = [
  {
    path: AppRoutes.default,
    element: <Layout />,
    children: [
      {
        index: AppRoutes.default,
        element: <Home />,
      },
      {
        path: AppRoutes.products,
        element: <Products />,
      },
      {
        path: AppRoutes.productdetail,
        element: <ProductDetail />,
      },
      {
        path: AppRoutes.about,
        element: (
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        ),
      },
      {
        path: AppRoutes.signup,
        element: <Signup />,
      },
      {
        path: AppRoutes.login,
        element: <Login />,
      },
      {
        path: AppRoutes.forgotpassword,
        element: <ForgotPassword />,
      },
      {
        path: AppRoutes.resetpassword,
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: AppRoutes.notfound,
    element: <NotFoundPage />,
  },
];

export default routes;
