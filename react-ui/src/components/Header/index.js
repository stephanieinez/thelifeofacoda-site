import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ image }) => (
  <div className="header-container">
    <div
      className="header-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="overlay">
      <img src="/lauralogo.png" alt="" className="overlay-logo" />
      <div className="overlay-text">The Life of a CODA</div>
    </div>
  </div>
);

Header.defaultProps = {
  image: '',
};
Header.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Header;
