import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const GamePage = lazy(() => import('./pages/GamePage'));
const TaskPage = lazy(() => import('./pages/TaskPage'));

const AlgorithmListPage = lazy(() => import('./pages/Admin/AlgorithmListPage'));
const AlgorithmCreatePage = lazy(() => import('./pages/Admin/AlgorithmCreatePage'));

const AlgorithmTaskPage = lazy(() => import('./pages/Admin/AlgorithmTaskPage'));

const SubjectCreatePage = lazy(() => import('./pages/Admin/SubjectCreatePage'));
const SubjectListPage = lazy(() => import('./pages/Admin/SubjectListPage'));

const AlgorithmTagCreatePage = lazy(() => import('./pages/Admin/AlgorithmTagCreatePage'));
const AlgorithmTagListPage = lazy(() => import('./pages/Admin/AlgorithmTagListPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/game',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <GamePage />
      </Suspense>
    ),
  },
  {
    path: '/game/:id',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TaskPage />
      </Suspense>
    ),
  },
  {
    path: '/admin/algorithms',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmListPage />
      </Suspense>
    ),
  },
  {
    path: '/admin/algorithms/create',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmCreatePage />
      </Suspense>
    ),
  },
  {
    path: '/admin/algorithms/:id/task',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmTaskPage />
      </Suspense>
    ),
  },
  {
    path: '/admin/subjects/create',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SubjectCreatePage />
      </Suspense>
    ),
  },
  {
    path: '/admin/subjects',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SubjectListPage />
      </Suspense>
    ),
  },
  {
    path: '/admin/algorithms/tags/create',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmTagCreatePage />
      </Suspense>
    ),
  },
  {
    path: '/admin/algorithms/tags',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmTagListPage />
      </Suspense>
    ),
  },
]);

export default router;
