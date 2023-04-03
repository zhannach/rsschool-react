import React from 'react';

import { Book } from 'types/home';

import style from '../assets/styles/Home.module.scss';

const Card = (props: { volumeInfo: Book }) => {
  const { volumeInfo: card } = props;
  return (
    <div className={style.card}>
      <img
        src={`${card.imageLinks.thumbnail}&fife=w400-h600`}
        className={style.img}
        alt={card.title}
      ></img>
      <div className={style['info-section']}>
        <h3 className={style.info}>
          <p className={style['info-text']}>Title: </p>
          {card.title}
        </h3>
        <span className={style.info}>
          <p className={style['info-text']}>Author: </p>
          {card.authors}
        </span>
        <span className={style.info}>
          <p className={style['info-text']}> Categories: </p>
          {card.categories}
        </span>
        <span className={style.info}>
          <p className={style['info-text']}>Language: </p>
          {card.language}
        </span>
        <span className={style.info}>
          <span className={style['info-text']}>Year: </span>
          {card.publishedDate}
        </span>
        <span className={style.info}>
          <span className={style['info-text']}>Pages: </span>
          {card.pageCount}
        </span>
        <div className={style.btns}>
          <button className={style['btn-buy']}>Buy</button>
          <button className={style['btn-add']}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
