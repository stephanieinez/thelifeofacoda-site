import React from 'react';
import PropTypes from 'prop-types';
import { Header, About } from '../../components';

const Home = ({ aboutText, servicesItems, image, homeVideo }) => (
  <div>
    <Header image={image} homeVideo={homeVideo} />
    <About content={aboutText} />
  </div>
);

Home.defaultProps = {
  aboutText: '',
  image: '',
  homeVideo: ''
};

Home.propTypes = {
  aboutText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Home;
