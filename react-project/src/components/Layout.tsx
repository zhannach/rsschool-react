import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

import style from '../assets/styles/Header.module.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header className={style.header}>
          <NavLink to="/" className={({ isActive }) => (isActive ? style['active-link'] : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? style['active-link'] : '')}>
            About Us
          </NavLink>
        </header>

        <Outlet />

        <footer></footer>
      </>
    );
  }
}
