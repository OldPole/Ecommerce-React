import App from '@/components/App';
import { About } from '@/components/pages/About';
import Categories from '@/components/pages/Categories/Categories';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
