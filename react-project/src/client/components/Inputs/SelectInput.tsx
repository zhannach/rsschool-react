import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'client/types/form';

import styles from '../../assets/styles/Form.module.scss';

const SelectInput = (props: { inputError: FieldErrors<Item>; register: UseFormRegister<Item> }) => {
  return (
    <label htmlFor="lang">
      Language
      <select
        className={props.inputError.language ? styles.error : ''}
        id="lang"
        {...props.register('language', {
          required: 'Field is required. Please, select option.',
        })}
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
      {props.inputError.language && (
        <p className={styles.message}>{props.inputError.language.message}</p>
      )}
    </label>
  );
};

export default SelectInput;
