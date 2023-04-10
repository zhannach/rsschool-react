import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Modal from '../components/Modal';
import Loader from './Loader';

import { fetchCard } from '../helpers/fetchCard';
import { BookData } from '../types/home';
import type { RootState } from '../redux/store';
import { setCard } from '../redux/slices/cardsSlice';

const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [isModalOpen, setModalOpen] = useState(false);
  const card = useSelector((state: RootState) => state.cards.card);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async (id: string) => {
    setIsLoading(true);
    const bookData = (await fetchCard(id)) as BookData;
    dispatch(setCard(bookData));
    setIsLoading(false);
    setModalOpen(true);
  };
  return (
    <>
      {isModalOpen && card && (
        <Modal
          onCloseModal={() => {
            setModalOpen(!isModalOpen);
          }}
        />
      )}
      {isLoading ? <Loader /> : null}
      {cards.map((card) => (
        <Card key={card.id} card={card} handleOpenModal={handleClick} />
      ))}
    </>
  );
};

export default CardList;
