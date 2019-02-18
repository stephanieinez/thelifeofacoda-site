import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';

import './App.css';
import { ROOT, CONTACT, ABOUT, YOGA, PT } from './routes';
import {
  Navigation,
  Footer,
  ErrorBoundaryPageRender,
  NotFound,
  Loading
} from './components';
import { normalise } from './utils';

import Home from './containers/Home';
// import Blog from './containers/Blog';
import Contact from './containers/Contact';
import About from './containers/About';
import Yoga from './containers/Yoga';
import PersonalTraining from './containers/PT';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: '',
      home: {},
      about: {},
      contact: {},
      yoga: {},
      ptLocation: {}
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/content')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error getting content');
        }
        return response.json();
      })
      .then(apiResult => {
        const items = normalise(apiResult);
        this.setState({ loading: false, ...items });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const {
      error,
      home,
      contact,
      about,
      loading,
      ptLocation,
      yoga
    } = this.state;
    // if (error) {
    //   return <ErrorBoundaryPageRender />;
    // }
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              {!loading ? (
                <Route
                  exact
                  path={ROOT}
                  render={reactRouterProps => (
                    <Home
                      {...reactRouterProps}
                      aboutText={home.aboutText}
                      image={home.heroImage}
                      dividerImage={home.dividerImage}
                      homeVideo={home.homeVideo}
                    />
                  )}
                />
              ) : (
                <Loading />
              )}
              {/* <Route
                path={BLOG}
                render={reactRouterProps => <Blog {...reactRouterProps} />}
              /> */}
              <Route
                path={PT}
                render={reactRouterProps => (
                  <PersonalTraining
                    ptLocation={ptLocation.ptLocation}
                    ptAddress={ptLocation.ptAddress}
                    {...reactRouterProps}
                  />
                )}
              />
              <Route
                path={YOGA}
                render={reactRouterProps => (
                  <Yoga
                    yogaTitle={yoga.yogaTitle}
                    yogaText={yoga.yogaText}
                    yogaVideo={yoga.yogaVideo}
                    {...reactRouterProps}
                  />
                )}
              />
              <Route
                path={CONTACT}
                render={reactRouterProps => (
                  <Contact
                    {...reactRouterProps}
                    contactText={contact.contactText}
                    image={contact.contactHeader}
                  />
                )}
              />
              <Route
                path={ABOUT}
                render={reactRouterProps => (
                  <About
                    {...reactRouterProps}
                    aboutTitle={about.aboutTitle}
                    aboutContent={about.aboutText}
                    image={about.headerImage}
                    video={about.aboutVideo}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
