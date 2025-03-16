import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '@store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary.tsx';

import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@layout/error/ErrorPage';
import Root from './layout/Root';
import UnControlForms, {
  action as actionUnControlForms,
} from '@layout/forms/UnControlForms';
import ControlForms from '@layout/forms/ControlForms';
import Main from '@layout/main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/un-control-form',
        element: <UnControlForms />,
        action: actionUnControlForms,
      },
      { path: '/control-form', element: <ControlForms /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Root element with ID 'root' was not found in the document.");
}
