import React from 'react';

import { describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import FormPage from '../pages/FormPage';
import FormCard from '../components/FormCard';

const fakeFormData = {
  author: 'Emily',
  publishDate: '2023-02-13',
  language: 'Spanish',
  subscribe: 'author',
  cover: 'hardcover',
  img: 'blob:http://localhost:5173/25ada3f6-a0da-4537-8051-ff958de92c3b',
};

describe('FormPage', () => {
  it('render page', () => {
    render(<FormPage />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/order book/i);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});

describe('FormPage', () => {
  it('render card', async () => {
    render(<FormPage />);
    const submit = screen.getByRole('button');
    expect(screen.getByLabelText(/publish date/i)).toHaveValue('');
    render(<FormCard data={fakeFormData} />);
    await userEvent.click(submit);
    expect(screen.getByText(/2023-02-13/)).toBeInTheDocument();
    render(<FormCard data={fakeFormData} />);
    expect(screen.getAllByText(/2023-02-13/)).toHaveLength(2);
  });
});

const mock = vi.fn();

describe('FormPage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('should call setTimeout', () => {
    render(<FormPage />);
    setTimeout(mock);
    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
