import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class FileInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return (
      <label>
        Upload book cover:
        <input
          ref={this.props.link}
          type="file"
          name="img"
          accept="image/*"
          className={this.props.message ? styles.error : ''}
        />
        {this.props.message && <p className={styles.message}>{this.props.message}</p>}
        {this.props.link.current?.files ? (
          <p className={styles.message}>{this.props.link.current?.files[0]?.name}</p>
        ) : (
          ''
        )}
      </label>
    );
  }
}
