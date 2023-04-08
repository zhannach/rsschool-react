import React, { useState } from 'react';

import Card from '../components/Card';
import Modal from '../components/Modal';
import Loader from './Loader';

import { fetchCard } from '../helpers/fetchCard';
import { BookData } from 'types/home';

const CardList = (props: { cards: BookData[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState<BookData>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (id: string) => {
    setIsLoading(true);
    const bookData = (await fetchCard(id)) as BookData;
    setCard(bookData);
    setIsLoading(false);
    setModalOpen(true);
  };
  return (
    <>
      {isModalOpen && card && (
        <Modal
          card={card.volumeInfo}
          onCloseModal={() => {
            setModalOpen(!isModalOpen);
          }}
        />
      )}
      {isLoading ? <Loader /> : null}
      {props.cards.map((card) => (
        <Card key={card.id} card={card} handleOpenModal={handleClick} />
      ))}
    </>
  );
};

export default CardList;
