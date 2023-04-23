import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'client/types/form';
import { validateDate } from '../../helpers/validateInput';

import styles from '../../assets/styles/Form.module.scss';

const DateInput = (props: { inputError: FieldErrors<Item>; register: UseFormRegister<Item> }) => {
  return (
    <label>
      Publish date:
      <input
        type="date"
        {...props.register('publishDate', {
          required: true,
          validate: {
            isValid: (v) => validateDate(v),
          },
        })}
        className={props.inputError.publishDate ? styles.error : ''}
      ></input>
      {props.inputError.publishDate && (
        <p className={styles.message}>Field is required. Please, enter correct date.</p>
      )}
    </label>
  );
};

export default DateInput;
