import React from 'react';
import PropTypes from 'prop-types';
import { BlogPost } from '../../components';
import './blog.css';

const Blog = ({ blogTitle, blogContent, blogVideo, blogDate }) => (
  <div>
    <div className="featured-post-container">
      <div className="featured-post">Featured Post 1</div>
      <div className="featured-post">Featured Post 2</div>
    </div>
    <BlogPost
      blogTitle={blogTitle}
      blogContent={blogContent}
      blogVideo={blogVideo}
      blogDate={blogDate}
    />
  </div>
);

Blog.defaultProps = {
  blogTitle: '',
  blogContent: '',
  blogVideo: '',
  blogDate: '',
};

Blog.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  blogVideo: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
};

export default Blog;
