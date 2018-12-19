import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.css';
import { ROOT } from '../../routes';

const NotFound = () => (
  <div className="notfound-container">
    <img className="notfound-image" src="/images/AboutAvi.jpg" alt="Loading" />
    <div className="notfound-text">
      Sorry, we cannot find the page you're looking for
    </div>
    <Link className="notfound-link" to={ROOT}>
      Click here to go back
    </Link>
  </div>
);

export default NotFound;
