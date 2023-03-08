import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import style from '../assets/styles/Home.module.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <header className={style.header}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </header>

        <Outlet />

        <footer></footer>
      </>
    );
  }
}
