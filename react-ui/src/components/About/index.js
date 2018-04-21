import React from 'react';
import PropTypes from 'prop-types';
import './about.css';

const About = ({ content }) => (
  <div className="about-container">
    <div
      className="about-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default About;
