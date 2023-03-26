import React from 'react';

import Form from '../components/Form';
import { Item } from 'types/form';

import styles from '../assets/styles/FormPage.module.scss';
import FormCard from '../components/FormCard';

export default class FormPage extends React.Component {
  state = {
    cards: [],
  };

  setFormData = (formData: Item) => {
    this.setState({ cards: [...this.state.cards, formData] });
  };

  render() {
    return (
      <div className={styles.container}>
        <section className={styles['form-content']}>
          <h1 className={styles.title}>Order book</h1>
          <Form setFormData={this.setFormData} />
          <div className={styles['form-list']}>
            {this.state.cards.length > 0
              ? this.state.cards.map((card: Item) => {
                  return <FormCard data={card} key={card.publishDate} />;
                })
              : ''}
          </div>
        </section>
      </div>
    );
  }
}
