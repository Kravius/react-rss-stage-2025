import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage404 from './components/Error/ErrorPage404/ErrorPage404.tsx';
import Person, {
  loader as loaderPerson,
} from './components/PeopleList/Person.tsx';
import {
  loader as loaderPeoplePage,
  // action as actionPeoplePage,
} from './layout/PeoplePage/PeoplePage.tsx';
import { HydrateFallback } from './components/HydrateFallback/HydrateFallback.tsx';
import PersonStartScreen from './components/PersonStartScreen/PersonStartScreen.tsx';

const Root = lazy(() => import('./routers/Root.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<HydrateFallback />}>
        <Root />
      </Suspense>
    ),
    errorElement: <ErrorPage404 />,
    loader: loaderPeoplePage,
    // action: actionPeoplePage,

    children: [
      { index: true, element: <PersonStartScreen /> },
      {
        path: 'people/:peopleId',
        element: <Person />,
        loader: loaderPerson,
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
