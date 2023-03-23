import React from 'react';

import Form from '../components/Form';

import styles from '../assets/styles/Form.module.scss';

export default class FormPage extends React.Component {
  state = {
    cards: [],
  };

  render() {
    return (
      <div className={styles.container}>
        <section className={styles['form-content']}>
          <h1 className={styles.title}>Order book</h1>
          <Form />
        </section>
      </div>
    );
  }
}
