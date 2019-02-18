import React from 'react';
import PropTypes from 'prop-types';
import './services.css';

const Services = ({ servicesItems }) => (
  <div className="services-container" id="services">
    <div className="services-heading">The life of a coda services</div>
    {servicesItems.map((item, index) => (
      <a href={item.link} className="services-text" key={index}>
        {item}
      </a>
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
