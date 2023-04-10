import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';

import styles from '../assets/styles/Home.module.scss';
import { setSearch } from '../redux/slices/searchSlice';

const Search = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  const searchRef = useRef('');
  searchRef.current = searchValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleClickSearch = () => {
    dispatch(setSearch(searchRef.current));
  };

  return (
    <>
      <section className={styles.search}>
        <input
          type="search"
          value={searchValue}
          className={styles.input}
          onChange={handleChange}
          placeholder="Find the book"
        />
        <svg
          aria-hidden="true"
          className={styles.svg}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <button onClick={handleClickSearch} type="button" className={styles.btn}>
          Search
        </button>
      </section>
    </>
  );
};

export default Search;
