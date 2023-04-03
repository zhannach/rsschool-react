import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import Card from '../components/Card';
import { fetchCards } from '../helpers/fetchCard';
import { BookData } from 'types/home';

import styles from '../assets/styles/Home.module.scss';

const Home = () => {
  const [cards, setCards] = useState<BookData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const booksData = (await fetchCards()) as BookData[];
      setCards(booksData);
    };
    getData();
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <Search />
      <section className={styles.cards}>
        {cards && cards.map((card) => <Card key={card.id} volumeInfo={card.volumeInfo} />)}
      </section>
    </div>
  );
};

export default Home;
