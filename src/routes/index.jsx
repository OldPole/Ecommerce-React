import React, { lazy, Suspense } from 'react';

import Layout from '@/layouts/Layout';
import PublicRoute from '@/routes/PublicRoute';
import PrivateRoute from '@/routes/PrivateRoute';

const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Login = lazy(() => import('@/pages/Login'));
const Signup = lazy(() => import('@/pages/Signup'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const Account = lazy(() => import('@/pages/Account'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export const AppRoutes = {
  default: '/',
  products: '/products',
  productdetail: '/product/:id',
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
    element: (
      <Suspense fallback="Loading...">
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
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
            element: <Account />,
          },
        ],
      },
    ],
  },
  {
    path: AppRoutes.notfound,
    element: (
      <Suspense fallback="Loading...">
        <NotFoundPage />
      </Suspense>
    ),
  },
];

export default routes;
