import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaClose } from 'react-icons/lib/fa';
import { ROOT, CONTACT, ABOUT, YOGA, PT } from '../../routes';
import './navigation.css';

const Navigation = () => (
  <div>
    <ResponsiveMenu
      menuOpenButton={<FaBars size={30} color="#BFAC6E" />}
      menuCloseButton={<FaClose size={30} color="#BFAC6E" />}
      changeMenuOn="900px"
      smallMenuClassName="small-navbar"
      menu={
        <div className="navbar-container">
          <a href={ROOT}>
            <img src="/logo-pt.png" alt="" className="nav-logo" />
            <img src="/logo-yoga.png" alt="" className="nav-logo" />
          </a>
          <div className="navbar-contact">
            <a href="mailto:thelifeofacoda@gmail.com">
              thelifeofacoda@gmail.com
            </a>
            <p>+353(87)3240075</p>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link to={ABOUT}>About</Link>
              </li>
              <li>
                <Link to={YOGA}>Yoga</Link>
              </li>
              <li>
                <Link to={PT}>Personal Training</Link>
              </li>
              <li>
                <Link to={CONTACT}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  </div>
);

export default Navigation;
