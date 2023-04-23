import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Item } from 'client/types/form';

import styles from '../../assets/styles/Form.module.scss';

const CheckboxInput = (props: {
  inputError: FieldErrors<Item>;
  register: UseFormRegister<Item>;
}) => {
  return (
    <label>
      Subscribe to:
      <label>
        <input
          {...props.register('subscribe', {
            validate: {
              notEmpty: (v) => v.length > 0,
            },
          })}
          type="checkbox"
          value="author"
          className={props.inputError.subscribe ? styles.error : ''}
        ></input>
        this author
      </label>
      <label>
        <input
          {...props.register('subscribe', {
            validate: {
              notEmpty: (v) => v.length > 0,
            },
          })}
          type="checkbox"
          className={props.inputError.subscribe ? styles.error : ''}
          value="genre"
        ></input>
        this genre
      </label>
      {props.inputError.subscribe && <p className={styles.message}>Field is required.</p>}
    </label>
  );
};

export default CheckboxInput;
