// import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router';
import { Suspense } from 'react';
import Home from '@/pages/home';

// const LoginPage = lazy(() => import('../pages/login'));

export const routesAll: RouteObject[] = [
  {
    index: true,
    element: (
      // <Suspense fallback={<Fallback />}>
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  // {
  //   path: 'login',
  //   element: (
  //     <Suspense fallback={<Fallback />}>
  //       <LoginPage />
  //     </Suspense>
  //   ),
  // },
];
