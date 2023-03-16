import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../assets/styles/NotFound.module.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          This page doesn&apos;t exist. Back to&nbsp;
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </h2>
      </div>
    );
  }
}
