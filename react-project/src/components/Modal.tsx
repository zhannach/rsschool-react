import React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';
import { useGetCardQuery } from '../redux/booksApi';
import Loader from './Loader';

import style from '../assets/styles/Home.module.scss';

const Modal = (props: { onCloseModal: () => void }) => {
  const id = useSelector((state: RootState) => state.card.cardId);
  const { data: card, isLoading, isFetching } = useGetCardQuery(id);

  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className={style.modal} onClick={() => props.onCloseModal()}>
      <div className="modal-dialog">
        {card && (
          <div className={style['modal-content']} onClick={(e) => e.stopPropagation()}>
            <span
              data-testid="close-modal"
              className={style.close}
              onClick={() => props.onCloseModal()}
            >
              &times;
            </span>
            <div className={style['modal-card']}>
              <img
                src={`${card.imageLinks.thumbnail}&fife=w400-h600`}
                className={style['modal-img']}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
