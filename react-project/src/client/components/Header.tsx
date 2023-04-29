import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from '../assets/styles/Header.module.scss';

const Header = () => {
  const title: Record<string, string> = {
    '/': 'Home',
    '/favorites': 'Favorites',
    '/form': 'Form Page',
  };
  const location = useLocation();
  return (
    <>
      <header className={style.header}>
        <h1 className={style['header-title']}>{title[location.pathname]}</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? style['active-link'] : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) => (isActive ? style['active-link'] : '')}
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form"
                className={({ isActive }) => (isActive ? style['active-link'] : '')}
              >
                Form Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
