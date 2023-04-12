import React, { useState } from 'react';

import { BookData } from 'types/home';
import { useDispatch } from 'react-redux';
import { setCardId } from '../redux/slices/cardSlice';
import Modal from '../components/Modal';

import style from '../assets/styles/Home.module.scss';

const Card = (props: { card: BookData }) => {
  const { id, volumeInfo: card } = props.card;
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCardId(id));
    setModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          onCloseModal={() => {
            setModalOpen(!isModalOpen);
          }}
        />
      )}
      <div className={style.card} onClick={handleClick}>
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
