import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './routers/Root.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage404 from './components/Error/ErrorPage404/ErrorPage404.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  );
} else {
  console.log('Root element not found');
}
