import React from 'react';

import Search from '../components/Search';
import CardList from '../components/CardList';

import styles from '../assets/styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Search />
      <section className={styles.cards}>
        <CardList />
      </section>
    </div>
  );
};

export default Home;
