import React, { Component } from "react";

class ErrorBound extends Component {
  constructor() {
    super();
    this.state = {
      getError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ getError: true });
  }
  render() {
    if (this.state.getError) {
      return <h1>Ooooooops, thats not good at all</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBound;
