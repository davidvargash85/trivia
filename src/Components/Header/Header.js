import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const DISPLAY_NAME = 'trivia-header';

const MainNavigation = () => {
  return (
    <header className={`${DISPLAY_NAME}`}>
      <div className={`${DISPLAY_NAME}__logo`}>Trivia</div>
      <nav className={`${DISPLAY_NAME}__nav`}>
        <ul>
          <li>
            <NavLink to='/' activeClassName={`${DISPLAY_NAME}__active`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/trivia' activeClassName={`${DISPLAY_NAME}__active`}>
              Trivia
            </NavLink>
          </li>
          <li>
            <NavLink to='/results' activeClassName={`${DISPLAY_NAME}__active`}>
              Results
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
