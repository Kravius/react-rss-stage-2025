import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage404 from './components/Error/ErrorPage404/ErrorPage404.tsx';
import Person from './components/PeopleList/people.tsx';
import {
  loader as loaderPeoplePage,
  action as actionPeoplePage,
} from './layout/PeoplePage/PeoplePage.tsx';
import { HydrateFallback } from './components/HydrateFallback/HydrateFallback.tsx';

const Root = lazy(() => import('./routers/Root.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Root />,
    element: (
      <Suspense fallback={<HydrateFallback />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage404 />,
    loader: loaderPeoplePage,
    action: actionPeoplePage,

    children: [
      {
        path: 'people/:peopleId',
        element: <Person />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* <ErrorBoundary> */}
      {/* <Suspense fallback={<HydrateFallback />}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
      {/* </ErrorBoundary> */}
    </StrictMode>
  );
} else {
  console.log('Root element not found');
}
