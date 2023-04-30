import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCardsQuery } from '../redux/booksApi';
import styles from '../assets/styles/Home.module.scss';

import Card from '../components/Card';
import Loader from './Loader';

import { BookData } from '../types/home';
import type { RootState } from '../redux/store';
import useDebounce from '../helpers/debounce';
import { setTotalCards } from '../redux/slices/cardSlice';

export const MAX_RESULTS = 9;

const CardList = () => {
  const startIndex = useSelector((state: RootState) => state.search.startIndex);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const debouncedSearchQuery = useDebounce(searchValue, 100);
  const debouncedStartIndex = useDebounce(startIndex, 100);
  const {
    data = { cards: [], totalCards: 0 },
    isLoading,
    isSuccess,
    isFetching,
    isError,
  } = useGetCardsQuery({
    value: debouncedSearchQuery,
    maxResults: MAX_RESULTS,
    startIndex: debouncedStartIndex,
  });
  const dispatch = useDispatch();
  dispatch(setTotalCards(data.totalCards));

  let content;
  if (isLoading || isFetching) {
    content = <Loader />;
  } else if (isSuccess && data.cards.length !== 0) {
    content = data.cards.map((card: BookData) => <Card key={card.id} card={card} />);
  } else if (isError || data.totalCards === 0) {
    content = (
      <h2 className={styles.error}>
        Oops, it looks like there is no such book. Try another search.
      </h2>
    );
  }

  return <>{content}</>;
};

export default CardList;
