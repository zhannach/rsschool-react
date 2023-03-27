import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class TextInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return (
      <label>
        Author:
        <input
          ref={this.props.link}
          type="text"
          name="author"
          placeholder="Surname"
          className={this.props.message ? styles.error : ''}
        ></input>
        {this.props.message && <p className={styles.message}>{this.props.message}.</p>}
      </label>
    );
  }
}
