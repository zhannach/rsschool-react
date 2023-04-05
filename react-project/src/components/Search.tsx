import React, { useRef, useState } from 'react';

import styles from '../assets/styles/Home.module.scss';

const Search = (props: { setValue: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState(() => {
    const initialValue = localStorage.getItem('searchValue') as string;
    return initialValue || '';
  });
  const searchRef = useRef('');
  searchRef.current = searchValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickSearch = () => {
    props.setValue(searchValue);
    localStorage.setItem('searchValue', searchRef.current);
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
