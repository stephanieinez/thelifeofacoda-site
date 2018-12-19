import React from 'react';
import PropTypes from 'prop-types';
import './featuredPosts.css';

const FeaturedPosts = ({ featuredPostTitle, featuredPostImage }) => (
  <div className="featured-post-container">
    <div
      className="featured-post"
      style={{ backgroundImage: `url(${featuredPostImage})` }}
    >
      {featuredPostTitle}
    </div>
  </div>
);

FeaturedPosts.defaultProps = {
  featuredPostImage: '',
  featuredPostTitle: '',
};

FeaturedPosts.propTypes = {
  featuredPostImage: PropTypes.string.isRequired,
  featuredPostTitle: PropTypes.string.isRequired,
};

export default FeaturedPosts;
