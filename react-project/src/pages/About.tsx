import React from 'react';

import styles from '../assets/styles/About.module.scss';

export default class About extends React.Component {
  render() {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>About us</h1>;
      </section>
    );
  }
}
