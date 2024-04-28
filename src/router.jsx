import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';

const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <HomePage />
      </Suspense>
    ),
  },
]);

export default router;
