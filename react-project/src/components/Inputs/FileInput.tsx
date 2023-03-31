import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'types/form';

import styles from '../../assets/styles/Form.module.scss';

const FileInput = (props: { inputError: FieldErrors<Item>; register: UseFormRegister<Item> }) => {
  return (
    <label>
      Upload book cover:
      <input
        type="file"
        accept="image/*"
        {...props.register('img', {
          required: true,
        })}
        className={props.inputError.img ? styles.error : ''}
      />
      {props.inputError.img && (
        <p className={styles.message}>Field is required. Please, select file.</p>
      )}
    </label>
  );
};

export default FileInput;
