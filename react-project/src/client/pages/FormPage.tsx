import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

import Form from '../components/Form';
import { Item } from 'client/types/form';

import styles from '../assets/styles/FormPage.module.scss';
import FormCard from '../components/FormCard';

const FormPage = () => {
  const cards = useSelector((state: RootState) => state.form.formCards);

  return (
    <div className={styles.container}>
      <section className={styles['form-content']}>
        <h2 className={styles.title}>Order book</h2>
        <p className={styles.subtitle}>
          Get your favorite book in your own cover. <br /> Choose a cover and see how your order
          will look.
        </p>
        <Form />
        <div className={styles['form-list']}>
          {cards.length > 0
            ? cards.map((card: Item) => {
                return <FormCard data={card} key={card.publishDate} />;
              })
            : ''}
        </div>
      </section>
    </div>
  );
};

export default FormPage;
