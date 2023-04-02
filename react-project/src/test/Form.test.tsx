import React from 'react';

import { describe, it, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

const fakeSetFormData = vitest.fn();

describe('render button', () => {
  it('submit button', () => {
    render(<Form setFormData={fakeSetFormData} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  });
});

describe('render form', () => {
  it('6 types of inputs', () => {
    render(<Form setFormData={fakeSetFormData} />);
    expect(screen.getByLabelText(/Author/)).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText(/language/i)).toHaveAttribute('name', 'language');
    expect(screen.getAllByLabelText(/genre/i)[0]).toHaveAttribute('type', 'checkbox');
    expect(screen.getAllByLabelText(/book cover/i)[0]).toHaveAttribute('type', 'radio');
    expect(screen.getByLabelText(/upload book cover/i)).toHaveAttribute('type', 'file');
    expect(screen.getByLabelText(/publish date/i)).toHaveAttribute('type', 'date');
  });
});

describe('checkbox subscribe events', () => {
  it('checkbox subscribe click', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[1]).not.toBeChecked();
    await userEvent.click(checkbox[1]);
    expect(checkbox[1]).toBeChecked();
    const checked = await screen.findAllByRole('checkbox', { checked: true });
    expect(checked).toHaveLength(1);
  });
});

describe('input text events', () => {
  it('type text', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const textInput = screen.getByRole('textbox');
    expect((textInput as HTMLInputElement).value).toBe('');
    await userEvent.type(screen.getByRole('textbox'), 'Emily Brontë');
    expect((textInput as HTMLInputElement).value).toBe('Emily Brontë');
  });
});

describe('checkbox events', () => {
  it('checkbox bookcover click', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const textInput = screen.getAllByRole('radio');
    expect(textInput[0]).not.toBeChecked();
    await userEvent.click(textInput[0]);
    expect(textInput).toHaveLength(2);
    expect(textInput[0]).toBeChecked();
  });
});

describe('select events', () => {
  it('select option', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const selectInput = screen.getByRole('combobox');
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(8);
    expect(selectInput).toHaveValue('');
    await userEvent.selectOptions(selectInput, 'Spanish');
    expect(screen.getByText('Spanish')).toBeTruthy();
  });
});

describe('date events', () => {
  it('select date', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const selectInput = screen.getByLabelText(/publish date/i);
    expect(selectInput).not.toHaveFocus();
    selectInput.focus();
    expect(selectInput).toHaveFocus();
  });
});

describe('Form', () => {
  it('reset form', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    const submit = screen.getByRole('button');
    await userEvent.click(submit);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
  });
});

describe('Form', () => {
  it('upload img', async () => {
    render(<Form setFormData={fakeSetFormData} />);
    let fileInput = screen.getByLabelText(/upload/i);
    expect(fileInput).not.toHaveClass('_error_17d956');
    const str = 'http://localhost:5173/25ada3f6-a0da-4537-8051-ff958de92c3b';
    const blob = new Blob([str]);
    const file = new File([blob], 'values.json', {
      type: 'application/JSON',
    });
    await userEvent.upload(fileInput, file);
    fileInput = await screen.findByLabelText(/upload/i);
    expect(fileInput).toHaveValue('');
  });
});
