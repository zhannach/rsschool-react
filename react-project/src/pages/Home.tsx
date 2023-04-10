import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';

import Search from '../components/Search';
import CardList from '../components/CardList';
import { fetchCards } from '../helpers/fetchCard';
import { BookData } from 'types/home';

import styles from '../assets/styles/Home.module.scss';
import Loader from '../components/Loader';
import { setCards } from '../redux/slices/cardsSlice';

const Home = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      let booksData: BookData[] = [];
      try {
        booksData = await fetchCards(searchValue);
        if (!booksData.length) {
          setError('Oops, it looks like there is no such book. Try another search.');
        }
      } catch (e) {
        setError((e as Error).message);
      }
      dispatch(setCards(booksData));
      setIsLoading(false);
    };
    getData();
  }, [searchValue, error]);

  return (
    <div className={styles.container}>
      <Search />
      <section className={styles.cards}>
        {isLoading ? <Loader /> : null}
        <CardList />
        {error && cards.length === 0 && <h2 className={styles.error}>{error}</h2>}
      </section>
    </div>
  );
};

export default Home;
