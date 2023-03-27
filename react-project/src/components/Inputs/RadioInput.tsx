import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class RadioInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLInputElement>[];
}> {
  render() {
    return (
      <label className={styles.cover}>
        Book cover:
        <label>
          <input
            type="radio"
            name="cover"
            ref={this.props.link[0]}
            className={this.props.message ? styles.error : ''}
          ></input>
          Softcover
        </label>
        <label>
          <input
            type="radio"
            name="cover"
            ref={this.props.link[1]}
            className={this.props.message ? styles.error : ''}
          ></input>
          Hardcover
          {this.props.message && <p className={styles.message}>{this.props.message}</p>}
        </label>
      </label>
    );
  }
}
