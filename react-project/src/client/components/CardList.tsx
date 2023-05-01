import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCardsQuery } from '../redux/booksApi';
import styles from '../assets/styles/Home.module.scss';

import Card from '../components/Card';
import Loader from './Loader';

import { BookData } from '../types/home';
import type { RootState } from '../redux/store';
import useDebounce from '../helpers/debounce';
import { setTotalCards } from '../redux/slices/searchSlice';

export const MAX_RESULTS = 9;

const CardList = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const startIndex = useSelector((state: RootState) => state.search.startIndex);
  const dispatch = useDispatch();
  const debouncedSearchQuery = useDebounce(searchValue, 100);
  const debouncedStartIndex = useDebounce(startIndex, 50);
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
  useEffect(() => {
    dispatch(setTotalCards(data.totalCards));
  }, [dispatch, data.totalCards]);

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
