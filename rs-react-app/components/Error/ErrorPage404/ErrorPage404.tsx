import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorPage404() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Hi! It is an Error Page</h1>
        <h2>404 Not Found Error</h2>
        <p>
          <i>{error.statusText}</i>
        </p>
        <p>
          <i>{error.data}</i>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Hi! It is an Error Page</h1>
      <h2>Something went wrong</h2>
    </div>
  );
}

export default ErrorPage404;
