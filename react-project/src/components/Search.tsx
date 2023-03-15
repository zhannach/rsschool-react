import React from 'react';

import styles from '../assets/styles/Home.module.scss';

export default class Search extends React.Component {
  state = {
    value: localStorage.getItem('searchValue') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <section className={styles.search}>
          <input
            type="search"
            className={styles.input}
            value={value}
            onChange={this.handleChange}
          ></input>
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
          <button type="button" className={styles.btn}>
            Search
          </button>
        </section>
      </>
    );
  }
}
