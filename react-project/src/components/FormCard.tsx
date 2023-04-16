import React from 'react';

import { Item } from 'types/form';
import styles from '../assets/styles/FormPage.module.scss';

const FormCard = (props: { data: Item }) => {
  const { data } = props;
  return (
    <div className={styles.card}>
      <img src={data.img as string} className={styles.img} alt=""></img>
      <div className={styles['info-section']}>
        <span className={styles.info}>
          <p className={styles['info-text']}>Author: </p>
          {`${data.author[0].toUpperCase()}${data.author.slice(1)}`}
        </span>
        <span className={styles.info}>
          <span className={styles['info-text']}>Publish date: </span>
          {data.publishDate}
        </span>
        <span className={styles.info}>
          <p className={styles['info-text']}>Language: </p>
          {data.language}
        </span>
        <span className={styles.info}>
          <span className={styles['info-text']}>Subscribe to: </span>
          {data.subscribe}
        </span>
        <span className={styles.info}>
          <span className={styles['info-text']}>Cover: </span>
          {data.cover}
        </span>
      </div>
    </div>
  );
};

export default FormCard;
