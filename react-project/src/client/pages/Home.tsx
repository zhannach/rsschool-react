import React from 'react';

import Search from '../components/Search';
import CardList from '../components/CardList';

import styles from '../assets/styles/Home.module.scss';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {
  const totalCards = useSelector((state: RootState) => state.card.totalCards);
  return (
    <div className={styles.container}>
      <Search />
      <section className={styles.cards}>
        <CardList />
      </section>
      {totalCards && <Pagination />}
    </div>
  );
};

export default Home;
