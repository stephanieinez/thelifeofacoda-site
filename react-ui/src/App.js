import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';

import './App.css';
import { ROOT, CONTACT, BLOG, ABOUT } from './routes';
import {
  Navigation,
  Footer,
  ErrorBoundaryPageRender,
  NotFound,
  Loading
} from './components';
import { normalise } from './utils';

import Home from './containers/Home';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import About from './containers/About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: '',
      home: {},
      about: {},
      contact: {}
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
    const { error, home, contact, about, loading } = this.state;
    if (error) {
      return <ErrorBoundaryPageRender />;
    }
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
                      servicesItems={home.services}
                      image={home.heroImage}
                      dividerImage={home.dividerImage}
                    />
                  )}
                />
              ) : (
                <Loading />
              )}
              <Route
                path={BLOG}
                render={reactRouterProps => <Blog {...reactRouterProps} />}
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
