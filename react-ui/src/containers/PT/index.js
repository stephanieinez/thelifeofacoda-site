import React, { Component } from 'react';
import marked from 'marked';

import { Loading } from '../../components';

class PersonalTraining extends Component {
  constructor() {
    super();
    this.state = {
      personalTraining: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('/api/pt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error getting content');
        }
        return response.json();
      })
      .then(apiResult => {
        this.setState({
          loading: false,
          personalTraining: apiResult.personalTraining
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    const { personalTraining, loading } = this.state;
    const { ptLocation, ptAddress } = this.props;
    const body = marked(ptAddress);

    return (
      <div className="yoga-container">
        <div className="yoga-heading">Personal Training</div>
        <div>
          {!loading ? (
            personalTraining.map((item, index) => (
              <div>
                <div className="yoga-content-wrapper" key={index}>
                  <div className="yoga-content">
                    <p className="yoga-title">{item.personalTrainingTitle}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(item.personalTrainingText)
                      }} //eslint-disable-line
                    />
                  </div>
                  <iframe
                    className="yoga-video"
                    src={item.personalTrainingUrl}
                    title="Blog Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <hr />
              </div>
            ))
          ) : (
            <Loading />
          )}
          <p className="yoga-heading">Location</p>
          <div className="address-container">
            <div
              dangerouslySetInnerHTML={{ __html: body }} //eslint-disable-line
            />
            <iframe
              className="map"
              src={ptLocation}
              width="600"
              height="400"
              frameborder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalTraining;
