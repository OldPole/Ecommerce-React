import React, { Suspense } from 'react';

import Layout from '@/layouts/Layout';
import { About } from '@/pages/About';
import Categories from '@/pages/Categories';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import Reset from '@/pages/Reset';

export const AppRoutes = {
  default: '/',
  categories: '/categories',
  about: '/about',
  signup: '/signup',
  login: '/login',
  reset: '/reset',
  forgotpassword: '/forgotpassword',
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
        path: AppRoutes.categories,
        element: <Categories />,
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
        path: AppRoutes.reset,
        element: <Reset />,
      },
    ],
  },
];

export default routes;
