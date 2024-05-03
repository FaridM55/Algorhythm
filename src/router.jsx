import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const GamePage = lazy(() => import('./pages/GamePage'));
const TaskPage = lazy(() => import('./pages/TaskPage'));

const AlgorithmListPage = lazy(() => import('./pages/Admin/AlgorithmListPage'));
const AlgorithmCreatePage = lazy(() => import('./pages/Admin/AlgorithmCreatePage'));
const AlgorithmUpdatePage = lazy(() => import('./pages/Admin/AlgorithmUpdatePage'));
const AlgorithmSubjectLinkPage = lazy(() => import('./pages/Admin/AlgorithmSubjectLinkPage'));

const AlgorithmTaskPage = lazy(() => import('./pages/Admin/AlgorithmTaskPage'));

const SubjectCreatePage = lazy(() => import('./pages/Admin/SubjectCreatePage'));
const SubjectListPage = lazy(() => import('./pages/Admin/SubjectListPage'));
const SubjectUpdatePage = lazy(() => import('./pages/Admin/SubjectUpdatePage'));

const AlgorithmTagCreatePage = lazy(() => import('./pages/Admin/AlgorithmTagCreatePage'));
const AlgorithmTagListPage = lazy(() => import('./pages/Admin/AlgorithmTagListPage'));
const AlgorithmTagUpdatePage = lazy(() => import('./pages/Admin/AlgorithmTagUpdatePage'));

const UserListPage = lazy(() => import('./pages/Admin/UserListPage'));

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
    path: 'subject/:id',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SubjectPage />
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
    path: '/admin/algorithms/:id/update',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmUpdatePage />
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
    path: '/admin/algorithms/:id/subject',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmSubjectLinkPage />
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
    path: '/admin/subjects/:id/update',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <SubjectUpdatePage />
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
  {
    path: '/admin/algorithms/tags/:id/update',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AlgorithmTagUpdatePage />
      </Suspense>
    ),
  },
  {
    path: '/admin/users',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <UserListPage />
      </Suspense>
    ),
  },
]);

export default router;
