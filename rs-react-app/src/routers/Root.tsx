import { ErrorBoundary } from '../components/Error/ErrorBoundary/ErrorBoundary';
import PeoplePage from '../layout/PeoplePage/PeoplePage';

function Root() {
  return (
    <>
      <ErrorBoundary>
        <PeoplePage />
      </ErrorBoundary>
    </>
  );
}

export default Root;
