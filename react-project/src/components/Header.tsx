import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../helpers/withRouter';

import style from '../assets/styles/Header.module.scss';

class Header extends React.Component<WithRouterProps> {
  render() {
    const title: Record<string, string> = {
      '/': 'Home',
      '/about': 'About Us',
      '/form': 'Form Page',
    };
    const pathname = this.props.location.pathname;
    return (
      <>
        <header className={style.header}>
          <h1 className={style['header-title']}>{title[pathname]}</h1>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? style['active-link'] : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? style['active-link'] : '')}
                >
                  About Us
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
  }
}

export default withRouter(Header);
