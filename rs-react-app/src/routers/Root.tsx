import { ErrorBoundary } from '../components/Error/ErrorBoundary/ErrorBoundary';
import PeoplePage from '../layout/PeoplePage/PeoplePage';
import { ThemeProvider } from '../services/ThemeContex';

function Root() {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider>
          <PeoplePage />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default Root;
