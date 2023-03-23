import React, { createRef } from 'react';

import styles from '../assets/styles/Form.module.scss';

export default class FormPage extends React.Component {
  authorRef = createRef<HTMLInputElement>();
  publishRef = createRef<HTMLInputElement>();
  langRef = createRef<HTMLSelectElement>();
  subscribeAuthorRef = createRef<HTMLInputElement>();
  subscribeGenreRef = createRef<HTMLInputElement>();
  coverRef = createRef<HTMLInputElement>();
  imgFileRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  render() {
    return (
      <div className={styles.container}>
        <section className={styles['form-content']}>
          <h1 className={styles.title}>Order book</h1>
          <form className={styles.form} ref={this.formRef}>
            <label>
              Author:
              <input ref={this.authorRef} type="text" name="author" placeholder="Full name"></input>
            </label>
            <label>
              Publish date:
              <input ref={this.publishRef} type="date" name="publishDate"></input>
            </label>
            <label htmlFor="lang">
              Language
              <select id="lang" name="language">
                <option value=""></option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Italian">Italian</option>
                <option value="German">German</option>
                <option value="Russian">Russian</option>
              </select>
            </label>
            <label>
              Subscribe to:
              <label>
                <input ref={this.subscribeAuthorRef} type="checkbox" name="subscribeAuthor"></input>
                this author
              </label>
              <label>
                <input ref={this.subscribeGenreRef} type="checkbox" name="subscribeGenre"></input>
                this genre
              </label>
            </label>
            <label className={styles.cover}>
              Book cover:
              <label>
                <input ref={this.coverRef} type="radio" name="cover"></input>
                Softcover
              </label>
              <label>
                <input ref={this.coverRef} type="radio" name="cover"></input>
                Hardcover
                <span className={styles.slider}></span>
              </label>
            </label>
            <label>
              Upload book cover:
              <input ref={this.imgFileRef} type="file" name="img" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}
