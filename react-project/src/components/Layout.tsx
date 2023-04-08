import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

import style from '../assets/styles/Header.module.scss';

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <footer className={style.footer}>
        <h2>RS-School 2023</h2>
      </footer>
    </>
  );
};

export default Layout;
