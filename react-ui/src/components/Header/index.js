import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 700
    };
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize = () => {
    this.setState({ height: window.innerHeight });
  };

  render() {
    const { image } = this.props;
    const { height } = this.state;
    return (
      <div className="header-container">
        <EventListener target="window" onResize={this.handleResize}>
          <div
            className="header-image"
            style={{ backgroundImage: `url(${image})`, height: height }}
          />
          <div className="overlay">
            <div className="overlay-text">The Life of a CODA</div>
            <div className="overlay-back">
              <img src="/lauralogo.png" alt="" className="overlay-logo" />
              <div className="overlay-about">Personal Training, Yoga & ISL</div>
            </div>
          </div>
        </EventListener>
      </div>
    );
  }
}

Header.defaultProps = {
  image: ''
};
Header.propTypes = {
  image: PropTypes.string.isRequired
};

export default Header;
