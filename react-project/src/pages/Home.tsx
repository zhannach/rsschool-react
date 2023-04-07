import React, { useEffect, useState } from 'react';

import Search from '../components/Search';
import CardList from '../components/CardList';
import { fetchCards } from '../helpers/fetchCard';
import { BookData } from 'types/home';

import styles from '../assets/styles/Home.module.scss';
import Loader from '../components/Loader';

const Home = () => {
  const [cards, setCards] = useState<BookData[]>([]);
  const [searchValue, setSearchValue] = useState(() => {
    const initialValue = localStorage.getItem('searchValue') as string;
    return initialValue || '';
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let booksData: BookData[] = [];
      try {
        booksData = await fetchCards(searchValue);
      } catch {
        setError(true);
      }
      setCards(booksData);
      setIsLoading(false);
    };
    getData();
  }, [searchValue, error]);

  const setValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className={styles.container}>
      <Search setValue={setValue} />
      <section className={styles.cards}>
        {isLoading ? <Loader /> : null}
        <CardList cards={cards} />
        {error && cards.length === 0 && (
          <h2 className={styles.error}>
            Oops, it looks like there is no such book. Try another search.
          </h2>
        )}
      </section>
    </div>
  );
};

export default Home;
