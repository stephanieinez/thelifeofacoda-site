import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Moment from 'react-moment';
import './blog-post.css';

const BlogPost = ({ blogTitle, blogContent, blogVideo, blogDate }) => {
  const body = marked(blogContent);
  return blogContent ? (
    <div className="blog">
      <div className="blog-heading">{blogTitle}</div>
      <div className="blog-date">
        <Moment format="dddd Do MMMM, YYYY">{blogDate}</Moment>
      </div>
      <div className="blog-content-wrapper">
        <div
          className={blogVideo ? 'blog-content' : 'blog-only-content'}
          dangerouslySetInnerHTML={{ __html: body }} //eslint-disable-line
        />
        {blogVideo ? (
          <iframe
            className="blog-video"
            src={blogVideo}
            title="Blog Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : null}
      </div>
      <hr />
    </div>
  ) : null;
};

BlogPost.defaultProps = {
  blogTitle: '',
  blogContent: '',
  blogVideo: '',
  blogDate: ''
};

BlogPost.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  blogVideo: PropTypes.string.isRequired
};

export default BlogPost;
