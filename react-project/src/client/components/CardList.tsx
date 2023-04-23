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
  const { data = [], isLoading, isSuccess, isFetching, isError } = useGetCardsQuery(searchValue);

  let content;
  if (isLoading || isFetching) {
    content = <Loader />;
  } else if (isSuccess && data.length !== 0) {
    content = data.map((card: BookData) => <Card key={card.id} card={card} />);
  } else if (isError || data.length === 0) {
    content = (
      <h2 className={styles.error}>
        Oops, it looks like there is no such book. Try another search.
      </h2>
    );
  }

  return <>{content}</>;
};

export default CardList;
