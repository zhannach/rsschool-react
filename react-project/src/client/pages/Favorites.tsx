import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from '../components/FavoriteCard';
import { RootState } from 'client/redux/store';

import styles from '../assets/styles/Favorites.module.scss';
import style from '../assets/styles/FormPage.module.scss';

const Favorites = () => {
  const favoritesCards = useSelector((state: RootState) => state.favorites.favoriteCards);
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>Favorites</h2>
        <div className={styles.favorites}>
          {favoritesCards.length > 0 ? (
            favoritesCards.map((card, id) => {
              return <FavoriteCard key={id} card={card} />;
            })
          ) : (
            <h3 className={style.subtitle}>
              You haven&apos;t added the book to your favorite list yet.
            </h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Favorites;
