import React, { Component } from 'react';
import marked from 'marked';

import { Loading } from '../../components';

import './yoga.css';

class Yoga extends Component {
  constructor() {
    super();
    this.state = {
      yogaClasses: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/yogaClasses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error getting content');
        }
        return response.json();
      })
      .then(apiResult => {
        this.setState({
          loading: false,
          yogaClasses: apiResult.yogaClasses
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    const { yogaText, yogaTitle, yogaVideo } = this.props;
    const { loading, yogaClasses } = this.state;
    const body = marked(yogaText);
    console.log(this.props);

    return (
      <div className="yoga-container">
        <div className="yoga-heading">Yoga Classes</div>
        {!loading ? (
          yogaClasses.map((item, index) => (
            <div className="yoga-classes-wrapper" key={index}>
              <div className="yoga-class-text">
                <p>{item.className}</p>
                <p className="yoga-date">{item.classTime}</p>
              </div>
              <div
                className="yoga-location"
                dangerouslySetInnerHTML={{
                  __html: marked(item.classAddress)
                }} //eslint-disable-line
              />
            </div>
          ))
        ) : (
          <Loading />
        )}
        <div className="flex-container">
          <div className="white-content">
            <div className="yoga-heading">Workshops</div>
            <p className="yoga-title">{yogaTitle}</p>
            <div
              dangerouslySetInnerHTML={{ __html: body }} //eslint-disable-line
            />
          </div>
          <iframe
            className="yoga-video-big"
            src={yogaVideo}
            title="Yoga video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

Yoga.defaultProps = {
  yogaText: '',
  yogaTitle: '',
  yogaVideo: ''
};

export default Yoga;
