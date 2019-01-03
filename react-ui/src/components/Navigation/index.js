import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaClose } from 'react-icons/lib/fa';
import { ROOT, CONTACT, BLOG, ABOUT } from '../../routes';
import './navigation.css';

const Navigation = () => (
  <div>
    <ResponsiveMenu
      menuOpenButton={<FaBars size={30} color="#998b6c" />}
      menuCloseButton={<FaClose size={30} color="#998b6c" />}
      changeMenuOn="530px"
      smallMenuClassName="small-navbar"
      menu={
        <div className="navbar-container">
          <a href={ROOT}>
            <img src="/lauralogo.png" alt="" className="nav-logo" />
          </a>
          <div className="navbar">
            <ul>
              <li>
                <Link to={ABOUT}>About</Link>
              </li>
              {/* <li>
                <Link to={BLOG}>Blog</Link>
              </li> */}
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
