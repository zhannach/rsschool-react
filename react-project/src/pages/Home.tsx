import React from 'react';

import Search from '../components/Search';
import Card from '../components/Card';
import cards from '../data/books.json';
import { Book } from 'types/home';

import styles from '../assets/styles/Home.module.scss';

export default class Home extends React.Component {
  cards: Book[] = cards;

  render() {
    return (
      <div className={styles.container}>
        <Search />
        <section className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </section>
      </div>
    );
  }
}
