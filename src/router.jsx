import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));

const router = createBrowserRouter({
  routes: [
    {
      path: '/',
      element: <HomePage />,
    },
  ],
});

export default router;
