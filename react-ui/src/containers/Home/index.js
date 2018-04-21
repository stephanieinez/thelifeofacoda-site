import React from 'react';
import PropTypes from 'prop-types';
import { Header, About, Services } from '../../components';

const Home = ({ aboutText, servicesItems, image, dividerImage }) => (
  <div>
    <Header image={image} />
    <About content={aboutText} />
    <div
      className="divider-image"
      style={{ backgroundImage: `url(${dividerImage})` }}
    />
    <Services servicesItems={servicesItems} />
  </div>
);

Home.defaultProps = {
  aboutText: '',
  servicesItems: [],
  image: '',
  dividerImage: '',
};

Home.propTypes = {
  aboutText: PropTypes.string.isRequired,
  servicesItems: PropTypes.array.isRequired, //eslint-disable-line
  image: PropTypes.string.isRequired,
  dividerImage: PropTypes.string.isRequired,
};

export default Home;
