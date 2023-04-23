import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'client/types/form';

import styles from '../../assets/styles/Form.module.scss';

const TextInput = (props: { inputError: FieldErrors<Item>; register: UseFormRegister<Item> }) => {
  const { inputError, register } = props;
  return (
    <label>
      Author:
      <input
        type="text"
        placeholder="Surname"
        {...register('author', {
          pattern: /^[a-zA-Z]+$/,
          minLength: 3,
          maxLength: 15,
          required: true,
        })}
        className={inputError.author ? styles.error : ''}
      ></input>
      {inputError.author && (
        <p className={styles.message}>Field is required. Please, enter at least 3 character.</p>
      )}
    </label>
  );
};

export default TextInput;
