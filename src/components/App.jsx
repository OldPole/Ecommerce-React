import Layout from '@/components/Layout';
import { About } from '@/components/pages/About';
import Categories from '@/components/pages/Categories';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login/Login';
import Signup from '@/components/pages/Signup';
import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/categories',
          element: <Categories />,
        },
        {
          path: '/about',
          element: (
            <Suspense fallback={'Loading...'}>
              <About />
            </Suspense>
          ),
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
