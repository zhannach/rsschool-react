import React from 'react';

import Search from '../components/Search';
import Card from '../components/Card';
import dataCards from '../data/books.json';
import { Book } from 'types/home';

import styles from '../assets/styles/Home.module.scss';

const Home = () => {
  const cards: Book[] = dataCards;

  return (
    <div className={styles.container}>
      <Search />
      <section className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </section>
    </div>
  );
};

export default Home;
