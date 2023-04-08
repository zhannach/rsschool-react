import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'types/form';

import styles from '../../assets/styles/Form.module.scss';

const RadioInput = (props: { inputError: FieldErrors<Item>; register: UseFormRegister<Item> }) => {
  return (
    <label className={styles.cover}>
      Book cover:
      <label>
        <input
          type="radio"
          value="softcover"
          {...props.register('cover', {
            required: true,
          })}
          className={props.inputError.cover ? styles.error : ''}
        ></input>
        Softcover
      </label>
      <label>
        <input
          type="radio"
          value="hardcover"
          {...props.register('cover', {
            required: true,
          })}
          className={props.inputError.cover ? styles.error : ''}
        ></input>
        Hardcover
        {props.inputError.cover && <p className={styles.message}>Field is required.</p>}
      </label>
    </label>
  );
};

export default RadioInput;
