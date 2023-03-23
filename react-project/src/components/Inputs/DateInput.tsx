import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class DateInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return (
      <label>
        Publish date:
        <input
          ref={this.props.link}
          type="date"
          name="publishDate"
          className={this.props.message ? styles.error : ''}
        ></input>
        {this.props.message && <p className={styles.message}>{this.props.message}.</p>}
      </label>
    );
  }
}
