import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { hasErrored } = this.state;
    return hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
        <ErrorImageText>Sorry this page is broken.</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}
export default ErrorBoundary;
