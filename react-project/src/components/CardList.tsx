import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCardsQuery } from '../redux/booksApi';
import styles from '../assets/styles/Home.module.scss';

import Card from '../components/Card';
import Loader from './Loader';

import { BookData } from '../types/home';
import type { RootState } from '../redux/store';

const CardList = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const { data = [], isLoading, isFetching, isError } = useGetCardsQuery(searchValue);

  return (
    <>
      {isLoading || isFetching ? <Loader /> : null}
      {data && data.map((card: BookData) => <Card key={card.id} card={card} />)}
      {isError && (
        <h2 className={styles.error}>
          Oops, it looks like there is no such book. Try another search.
        </h2>
      )}
    </>
  );
};

export default CardList;
