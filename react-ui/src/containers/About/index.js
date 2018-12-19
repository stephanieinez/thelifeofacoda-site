import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './about.css';

const About = ({ aboutTitle, aboutContent, image, video }) => {
  const body = marked(aboutContent);
  return (
    <div>
      <div
        className="content-page-header"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="about-heading">{aboutTitle}</div>
      <div className="about-content-wrapper">
        <iframe
          className="about-video"
          src={video}
          title="About me video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div
          className="about-content"
          dangerouslySetInnerHTML={{ __html: body }} //eslint-disable-line
        />
      </div>
    </div>
  );
};

About.defaultProps = {
  aboutContent: '',
  aboutTitle: '',
  image: '',
  video: '',
};

About.propTypes = {
  aboutTitle: PropTypes.string.isRequired,
  aboutContent: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, //eslint-disable-line
  video: PropTypes.string.isRequired,
};

export default About;
