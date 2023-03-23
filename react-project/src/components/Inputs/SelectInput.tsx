import React from 'react';

import styles from '../../assets/styles/Form.module.scss';

export default class SelectInput extends React.Component<{
  message: string;
  link: React.RefObject<HTMLSelectElement>;
}> {
  render() {
    return (
      <label htmlFor="lang">
        Language
        <select
          className={this.props.message ? styles.error : ''}
          id="lang"
          name="language"
          ref={this.props.link}
        >
          <option value=""></option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Italian">Italian</option>
          <option value="German">German</option>
          <option value="Russian">Russian</option>
        </select>
        {this.props.message && <p className={styles.message}>{this.props.message}</p>}
      </label>
    );
  }
}
