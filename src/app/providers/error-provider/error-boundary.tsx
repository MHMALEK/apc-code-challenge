import React from 'react';
import errorController from '.';
import ErrorMessages from './error-messages';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: ErrorMessages.default };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error.message || '' };
  }

  componentDidCatch() {
    errorController.onComponentErrorHandler();
  }

  render() {
    const { message, hasError } = this.state;
    if (hasError) {
      return <p>{message}</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
