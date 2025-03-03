import { Component, ErrorInfo, ReactNode } from 'react';

import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  errorMassage: string;
}

class ErrorBoundary extends Component<Props, State> {
  logErrorToServices = console.log;

  constructor(props: Props) {
    super(props);
    this.state = { errorMassage: '' };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.logErrorToServices(error.toString(), errorInfo.componentStack);
  }

  static getDerivedStateFromError(error: Error) {
    return { errorMassage: error.toString() };
  }

  reloadPage = () => {
    history.go(0);
  };

  render() {
    if (this.state.errorMassage) {
      return (
        <div className={styles['errorContainer']}>
          <p>{this.state.errorMassage}</p>
          <button onClick={this.reloadPage}>Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
