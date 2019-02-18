import React from 'react';
import { FaInstagram, FaEnvelopeO } from 'react-icons/lib/fa';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <a href="https://www.instagram.com/thelifeofacoda/">
      <FaInstagram size={25} color="#BFAC6E" className="icon" />
    </a>
    <a href="mailto:thelifeofacoda@gmail.com">
      <FaEnvelopeO size={25} color="#BFAC6E" className="icon" />
    </a>
  </div>
);

export default Footer;
