import Layout from '@/components/Layout';
import { About } from '@/components/pages/About';
import Categories from '@/components/pages/Categories/Categories';
import Home from '@/components/pages/Home';
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
