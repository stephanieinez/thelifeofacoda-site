import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 700
    };
  }

  render() {
    const { homeVideo } = this.props;
    return (
      <div className="header-container">
        <div className="header-image">
          <img className="header-image-pt" src="/logo-pt.png" alt="" />
          <img className="header-image-yoga" src="/logo-yoga.png" alt="" />
        </div>
        <iframe
          className="home-video"
          src={homeVideo}
          title="home video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}

Header.defaultProps = {
  homeVideo: ''
};
Header.propTypes = {
  homeVideo: PropTypes.string
};

export default Header;
