import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';

import styles from '../assets/styles/Home.module.scss';
import { setSearch } from '../redux/slices/searchSlice';

const Search = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const [localValue, setLocalValue] = useState(searchValue || '');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleClickSearch = () => {
    dispatch(setSearch(localValue));
  };

  return (
    <>
      <section className={styles.search}>
        <input
          type="search"
          value={localValue}
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
