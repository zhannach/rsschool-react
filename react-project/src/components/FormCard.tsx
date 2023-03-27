import React from 'react';

import { Item } from 'types/form';
import styles from '../assets/styles/FormPage.module.scss';

export default class FormCard extends React.Component<{ data: Item }> {
  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.data.img} className={styles.img} alt=""></img>
        <div className={styles['info-section']}>
          <span className={styles.info}>
            <p className={styles['info-text']}>Author: </p>
            {`${this.props.data.author[0].toUpperCase()}${this.props.data.author.slice(1)}`}
          </span>
          <span className={styles.info}>
            <span className={styles['info-text']}>Publish date: </span>
            {this.props.data.publishDate}
          </span>
          <span className={styles.info}>
            <p className={styles['info-text']}>Language: </p>
            {this.props.data.language}
          </span>
          <span className={styles.info}>
            <span className={styles['info-text']}>Subscribe to: </span>
            {this.props.data.subscribe}
          </span>
          <span className={styles.info}>
            <span className={styles['info-text']}>Cover: </span>
            {this.props.data.cover}
          </span>
        </div>
      </div>
    );
  }
}
