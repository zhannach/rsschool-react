import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class CheckboxInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLInputElement>[];
}> {
  render() {
    return (
      <label>
        Subscribe to:
        <label>
          <input
            ref={this.props.link[0]}
            type="checkbox"
            className={this.props.message ? styles.error : ''}
            name="author"
          ></input>
          this author
        </label>
        <label>
          <input
            ref={this.props.link[1]}
            type="checkbox"
            className={this.props.message ? styles.error : ''}
            name="genre"
          ></input>
          this genre
        </label>
        {this.props.message && <p className={styles.message}>{this.props.message}</p>}
      </label>
    );
  }
}
