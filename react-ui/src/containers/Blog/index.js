import React, { Component } from 'react';
import { BlogPost, Loading } from '../../components';
import './blog.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch('/api/blog')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error getting content');
        }
        return response.json();
      })
      .then(apiResult => {
        this.setState({ loading: false, blogPosts: apiResult });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    const { blogPosts, loading } = this.state;
    return (
      <div className="blog-container">
        {!loading ? (
          blogPosts.blogPosts.map((item, index) => (
            <BlogPost
              blogTitle={item.blogTitle}
              blogContent={item.blogContent}
              blogVideo={item.blogVideo}
              blogDate={item.blogDate}
              key={index}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Blog;
