import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './errorBoundaryPage.css';

export const ErrorBoundaryPageRender = () => (
  <div className="error-block">
    <p>
      Sorry, this page is having some technical problems, it should be back up
      and running soon.<br />
    </p>
    <p>
      In the meantime, you can email me directly at{' '}
      <a href="mailto:laura@gmail.com">laura@gmail.com</a>
      <br />
      Or find me on Instagram{' '}
      <a href="https://twitter.com/thelifeofacoda">@thelifeofacoda</a>
    </p>
  </div>
);

class ErrorBoundaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryPageRender />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryPage;
ErrorBoundaryPage.propTypes = {
  children: PropTypes.node.isRequired,
};
