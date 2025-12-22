import React, { Suspense } from 'react';

import Layout from '@/layouts/Layout';
import { Products } from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import { Account } from '@/pages/Account';
import NotFoundPage from '@/pages/NotFoundPage';

import PublicRoute from '@/routes/PublicRoute';
import PrivateRoute from '@/routes/PrivateRoute';

export const AppRoutes = {
  default: '/',
  products: '/products',
  productdetail: '/product/:id',
  about: '/about',
  signup: '/signup',
  login: '/login',
  resetpassword: '/resetpassword/:token',
  forgotpassword: '/forgotpassword',
  account: '/account',
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
        element: (
          <Suspense fallback={'Loading...'}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: AppRoutes.productdetail,
        element: <ProductDetail />,
      },
      {
        element: <PublicRoute />,
        children: [
          { path: AppRoutes.login, element: <Login /> },
          { path: AppRoutes.signup, element: <Signup /> },
          { path: AppRoutes.forgotpassword, element: <ForgotPassword /> },
          { path: AppRoutes.resetpassword, element: <ResetPassword /> },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: AppRoutes.account,
            element: (
              <Suspense fallback={'Loading...'}>
                <Account />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: AppRoutes.notfound,
    element: <NotFoundPage />,
  },
];

export default routes;
