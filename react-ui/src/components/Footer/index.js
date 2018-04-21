import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelopeO } from 'react-icons/lib/fa';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <a href="https://github.com/stephanieinez">
      <FaInstagram size={25} color="#245031" className="icon" />
    </a>
    <a href="https://www.linkedin.com/in/stephanie-tassone-b2241b66/">
      <FaEnvelopeO size={25} color="#245031" className="icon" />
    </a>
    <a href="mailto:stephanie.tassone@gmail.com">
      <FaFacebook size={25} color="#245031" className="icon" />
    </a>
  </div>
);

export default Footer;
