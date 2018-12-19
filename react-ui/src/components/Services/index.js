import React from 'react';
import PropTypes from 'prop-types';
import './services.css';

const Services = ({ servicesItems }) => (
  <div className="services-container" id="services">
    <div className="services-heading">Where I'm teaching</div>
    {servicesItems.map((item, index) => (
      <div className="services-text" key={index}>
        {item}
      </div>
    ))}
  </div>
);

Services.defaultProps = {
  servicesItems: []
};
Services.propTypes = {
  servicesItems: PropTypes.array.isRequired //eslint-disable-line
};

export default Services;
