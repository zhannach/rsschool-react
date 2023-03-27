import React from 'react';

import { Book } from 'types/home';

import style from '../assets/styles/Home.module.scss';

export default class Card extends React.Component<{ card: Book }> {
  render() {
    const { card } = this.props;
    return (
      <div className={style.card}>
        <img src={`${card.imageLink}`} className={style.img} alt={card.title}></img>
        <div className={style['info-section']}>
          <h3 className={style.info}>
            <p className={style['info-text']}>Title: </p>
            {card.title}
          </h3>
          <span className={style.info}>
            <p className={style['info-text']}>Author: </p>
            {card.author}
          </span>
          <span className={style.info}>
            <p className={style['info-text']}>Country: </p>
            {card.country}
          </span>
          <span className={style.info}>
            <p className={style['info-text']}>Launguage: </p>
            {card.language}
          </span>
          <span className={style.info}>
            <span className={style['info-text']}>Year: </span>
            {card.year}
          </span>
          <span className={style.info}>
            <span className={style['info-text']}>Pages: </span>
            {card.pages}
          </span>
          <div className={style.btns}>
            <button className={style['btn-buy']}>Buy</button>
            <button className={style['btn-add']}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}
