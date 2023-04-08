import React from 'react';

import { BookData } from 'types/home';

import style from '../assets/styles/Home.module.scss';

const Card = (props: { card: BookData; handleOpenModal: (id: string) => void }) => {
  const { id, volumeInfo: card } = props.card;

  return (
    <>
      <div className={style.card} onClick={() => props.handleOpenModal(id)}>
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
        </div>
      </div>
    </>
  );
};

export default Card;
