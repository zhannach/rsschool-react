import React, { createRef } from 'react';

import validateInput from '../helpers/validateInput';

import styles from '../assets/styles/Form.module.scss';

import SelectInput from '../components/Inputs/SelectInput';
import CheckboxInput from '../components/Inputs/CheckboxInput';
import RadioInput from '../components/Inputs/RadioInput';
import DateInput from '../components/Inputs/DateInput';
import TextInput from '../components/Inputs/TextInput';
import FileInput from '../components/Inputs/FileInput';

export default class Form extends React.Component {
  authorRef = createRef<HTMLInputElement>();
  publishRef = createRef<HTMLInputElement>();
  langRef = createRef<HTMLSelectElement>();
  subscribeAuthorRef = createRef<HTMLInputElement>();
  subscribeGenreRef = createRef<HTMLInputElement>();
  coverSoftRef = createRef<HTMLInputElement>();
  coverHardRef = createRef<HTMLInputElement>();
  imgFileRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  state = {
    data: {
      author: '',
      publishDate: '',
      language: '',
      subscribe: '',
      cover: '',
      img: '',
    },
    errors: {
      author: '',
      publishDate: '',
      language: '',
      subscribe: '',
      cover: '',
      img: '',
    },
  };

  onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      author: this.authorRef.current?.value as string,
      publishDate: this.publishRef.current?.value as string,
      language: this.langRef.current?.value as string,
      subscribe: `${this.subscribeAuthorRef.current?.checked ? 'author' : ''}${
        this.subscribeGenreRef.current?.checked ? 'genre' : ''
      }`,
      cover: `${this.coverSoftRef.current?.checked ? 'softcover' : ''}${
        this.coverHardRef.current?.checked ? 'hardcover' : ''
      }`,
      img: this.imgFileRef.current?.value as string,
    };

    const errors = { ...this.state.errors };
    let hasErrors = false;
    for (const [key, value] of Object.entries(data)) {
      const name = key as keyof typeof errors;
      errors[name] = validateInput(name, value);
      if (errors[name]) hasErrors = true;
    }

    this.setState({
      data,
      errors,
    });
    if (!hasErrors) {
      this.formRef.current?.reset();
      alert('data was saved');
    }
  };

  render() {
    const data = this.state.data;
    console.log(this.formRef.current);
    return (
      <form className={styles.form} onSubmit={this.onSubmitForm} ref={this.formRef}>
        <TextInput message={this.state.errors.author} link={this.authorRef} />
        <DateInput message={this.state.errors.publishDate} link={this.publishRef} />
        <SelectInput message={this.state.errors.language} link={this.langRef} />
        <CheckboxInput
          message={this.state.errors.subscribe}
          link={[this.subscribeGenreRef, this.subscribeAuthorRef]}
        />
        <RadioInput
          message={this.state.errors.cover}
          link={[this.coverSoftRef, this.coverHardRef]}
        />
        <FileInput message={this.state.errors.img} link={this.imgFileRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
