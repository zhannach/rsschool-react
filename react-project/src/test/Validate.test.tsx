import React from 'react';

import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import FormPage from '../pages/FormPage';

describe('FormPage', () => {
  it('render validate errors', async () => {
    render(<FormPage />);
    const submit = screen.getByRole('button');
    await userEvent.click(submit);
    const errors = await screen.findAllByText(/field is required/i);
    expect(errors[0]).toBeInTheDocument();
    expect(errors).toHaveLength(6);
  });
});

describe('FormPage', () => {
  it('validate text, select, date inputs', async () => {
    render(<FormPage />);
    const submit = screen.getByRole('button');
    const textInput = screen.getByRole('textbox');
    const selectInput = screen.getByRole('combobox');
    const dateInput = screen.getByLabelText(/publish date/i);
    await userEvent.type(textInput, 'Celan');
    await userEvent.click(submit);
    let errors = await screen.findAllByText(/field is required/i);
    expect(errors).toHaveLength(5);
    await userEvent.selectOptions(selectInput, 'English');
    await userEvent.click(submit);
    errors = await screen.findAllByText(/field is required/i);
    expect(errors).toHaveLength(4);
    await userEvent.type(dateInput, '2023-02-13');
    await userEvent.click(submit);
    errors = await screen.findAllByText(/field is required/i);
    expect(errors).toHaveLength(3);
  });
});

describe('FormPage', () => {
  it('validate checkbox, radio inputs', async () => {
    render(<FormPage />);
    const submit = screen.getByRole('button');
    const checkbox = screen.getAllByRole('checkbox');
    const radio = screen.getAllByRole('radio');
    await userEvent.click(checkbox[0]);
    await userEvent.click(submit);
    let errors = await screen.findAllByText(/field is required/i);
    expect(errors).toHaveLength(5);
    await userEvent.click(radio[0]);
    await userEvent.click(submit);
    errors = await screen.findAllByText(/field is required/i);
    expect(errors).toHaveLength(4);
  });
});
