import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Item } from 'types/form';

import styles from '../assets/styles/Form.module.scss';

import SelectInput from '../components/Inputs/SelectInput';
import CheckboxInput from '../components/Inputs/CheckboxInput';
import RadioInput from '../components/Inputs/RadioInput';
import DateInput from '../components/Inputs/DateInput';
import TextInput from '../components/Inputs/TextInput';
import FileInput from '../components/Inputs/FileInput';

const Form = (props: { setFormData: (formData: Item) => void }) => {
  const { setFormData } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Item>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [isSaved, setIsSaved] = useState(false);

  const onSubmitForm: SubmitHandler<Item> = (data: Item) => {
    const localImageUrl = URL.createObjectURL(data.img[0] as Blob);
    data.img = localImageUrl;
    setFormData(data);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)} data-testid="form">
      <TextInput inputError={errors} register={register} />
      <DateInput inputError={errors} register={register} />
      <SelectInput inputError={errors} register={register} />
      <CheckboxInput inputError={errors} register={register} />
      <RadioInput inputError={errors} register={register} />
      <FileInput inputError={errors} register={register} />
      <button type="submit">Submit</button>
      {isSaved && (
        <span data-testid="saved-message" className={styles.save}>
          Data has been save
        </span>
      )}
    </form>
  );
};

export default Form;
