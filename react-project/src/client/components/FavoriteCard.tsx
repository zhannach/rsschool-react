import React from 'react';

import { BookData, Book } from 'client/types/home';
import style from '../assets/styles/Home.module.scss';
import styles from '../assets/styles/Favorites.module.scss';
import { useDispatch } from 'react-redux';
import { removeFavoriteCard } from '../redux/slices/favoritesSlice';

const FavoriteCard = (props: { card: BookData }) => {
  const { id, volumeInfo: card } = props.card;
  const dispatch = useDispatch();

  const handleRemoveFav = () => {
    dispatch(removeFavoriteCard({ id, volumeInfo: card as Book }));
  };

  return (
    <div className={styles.card}>
      <div className={styles['img-section']}>
        <img
          src={`${card.imageLinks.thumbnail}&fife=w400-h600`}
          className={styles.img}
          alt={card.title}
        ></img>
      </div>

      <div className={styles['info-section']}>
        <h3 className={styles.info}>
          <p className={styles['info-text']}>Title: </p>
          {card.title}
        </h3>
        <span className={styles.info}>
          <p className={styles['info-text']}>Author: </p>
          {card.authors}
        </span>
        <span className={styles.info}>
          <p className={styles['info-text']}>Categories: </p>
          {card.categories}
        </span>
        <span className={styles.info}>
          <p className={styles['info-text']}>Language: </p>
          {card.language}
        </span>
        <span className={styles.info}>
          <span className={styles['info-text']}>Year: </span>
          {card.publishedDate}
        </span>
        <span className={styles.info}>
          <span className={styles['info-text']}>Pages: </span>
          {card.pageCount}
        </span>
        <div className={styles.btns}>
          <a href={card.infoLink} target="_blank" rel="noreferrer">
            <button className={style['btn-buy']}>Buy</button>
          </a>
          <button onClick={handleRemoveFav} className={styles['btn-add']}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
