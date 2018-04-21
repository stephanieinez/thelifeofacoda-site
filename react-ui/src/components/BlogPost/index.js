import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './blog-post.css';

const BlogPost = ({ blogTitle, blogContent, blogVideo, blogDate }) => {
  const body = marked(blogContent);
  return (
    <div className="blog-container">
      <div className="blog-heading">{blogTitle}</div>
      <div className="blog-date">{blogDate}</div>
      <div className="blog-content-wrapper">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: body }} //eslint-disable-line
        />
        <iframe
          className="blog-video"
          src={blogVideo}
          title="Blog Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <hr />
    </div>
  );
};

BlogPost.defaultProps = {
  blogTitle: '',
  blogContent: '',
  blogVideo: '',
  blogDate: '',
};

BlogPost.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  blogVideo: PropTypes.string.isRequired,
};

export default BlogPost;
