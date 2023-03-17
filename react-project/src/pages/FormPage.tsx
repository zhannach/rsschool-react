import React from 'react';

import styles from '../assets/styles/Form.module.scss';

export default class FormPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles['form-content']}>
          <h1 className={styles.title}>Order book</h1>
          <form className={styles.form}>
            <label>
              Author:
              <input type="text" name="author"></input>
            </label>
            <label>
              Publish date:
              <input type="date" name="date"></input>
            </label>
            <label htmlFor="lang">
              Launguage
              <select id="lang">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Ukraine">Ukrainian</option>
                <option value="Italian">Italian</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
              </select>
            </label>
            <label>
              Subscribe to:
              <label>
                <input type="checkbox"></input>
                this author
              </label>
              <label>
                <input type="checkbox"></input>
                this genre
              </label>
            </label>
            <label>
              Softcover / Hardcover
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider}></span>
              </label>
            </label>
            <label>
              Upload book cover:
              <input type="file" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}
