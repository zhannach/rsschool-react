import React, { createRef } from 'react';

import validateInput from '../helpers/validateInput';
import { Item } from 'types/form';

import styles from '../assets/styles/Form.module.scss';

import SelectInput from '../components/Inputs/SelectInput';
import CheckboxInput from '../components/Inputs/CheckboxInput';
import RadioInput from '../components/Inputs/RadioInput';
import DateInput from '../components/Inputs/DateInput';
import TextInput from '../components/Inputs/TextInput';
import FileInput from '../components/Inputs/FileInput';

export default class Form extends React.Component<{ setFormData: (formData: Item) => void }> {
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
    isSaved: false,
  };

  onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    let localImageUrl = '';
    if (this.imgFileRef.current?.files && this.imgFileRef.current.files?.length !== 0) {
      const imageFile = this.imgFileRef.current?.files[0];
      localImageUrl = URL.createObjectURL(imageFile);
    }
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
      img: localImageUrl,
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
      this.props.setFormData(data);
      this.setState(() => ({ isSaved: true }));
      setTimeout(() => {
        this.setState(() => ({ isSaved: false }));
      }, 1000);
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.onSubmitForm}
        ref={this.formRef}
        data-testid="form"
      >
        <TextInput message={this.state.errors.author} link={this.authorRef} />
        <DateInput message={this.state.errors.publishDate} link={this.publishRef} />
        <SelectInput message={this.state.errors.language} link={this.langRef} />
        <CheckboxInput
          message={this.state.errors.subscribe}
          link={[this.subscribeAuthorRef, this.subscribeGenreRef]}
        />
        <RadioInput
          message={this.state.errors.cover}
          link={[this.coverSoftRef, this.coverHardRef]}
        />
        <FileInput message={this.state.errors.img} link={this.imgFileRef} />
        <button type="submit">Submit</button>
        {this.state.isSaved && (
          <span data-testid="saved-message" className={styles.save}>
            Data has been save
          </span>
        )}
      </form>
    );
  }
}
