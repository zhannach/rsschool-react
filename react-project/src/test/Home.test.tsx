import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../client/redux/store';
import { Provider } from 'react-redux';

import Search from '../client/components/Search';
import About from '../client/pages/About';

describe('Search', () => {
  it('renders search input', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('');
  });
});

describe('Search', () => {
  it('renders search button', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/search/i);
  });
});

describe('Search event', () => {
  it('types into the input', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByRole('searchbox');
    expect(screen.queryByText(/react/i)).toBeNull();
    await userEvent.type(screen.getByRole('searchbox'), 'react');
    expect((input as HTMLInputElement).value).toBe('react');
  });
});

describe('Search focus', () => {
  it('input focus', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByRole('searchbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

describe('About', () => {
  it('renders about page', () => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
