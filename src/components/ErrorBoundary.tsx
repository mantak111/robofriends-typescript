import React, { Component } from "react";

interface IErrorBoundaryProps {}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componenDidCatch(error: Error | null, info: object): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
