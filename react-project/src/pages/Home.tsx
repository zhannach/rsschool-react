import React from 'react';

import Search from '../components/Search';

import styles from '../assets/styles/Home.module.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Search />
      </div>
    );
  }
}
