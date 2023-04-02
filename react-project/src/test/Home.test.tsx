import React from 'react';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';
import Search from '../components/Search';
import About from '../pages/About';

describe('Search', () => {
  it('renders search input', () => {
    render(<Search />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('');
  });
});

describe('Search', () => {
  it('renders search button', () => {
    render(<Search />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/search/i);
  });
});

describe('Search event', () => {
  it('types into the input', async () => {
    render(<Search />);
    const input = screen.getByRole('searchbox');
    expect(screen.queryByText(/react/i)).toBeNull();
    await userEvent.type(screen.getByRole('searchbox'), 'react');
    expect((input as HTMLInputElement).value).toBe('react');
  });
});

describe('Search focus', () => {
  it('input focus', () => {
    render(<Search />);
    const input = screen.getByRole('searchbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

describe('Card', () => {
  it('renders card', () => {
    render(<Home />);
    expect(screen.getByAltText(/Le Père Goriot/i));
    expect(screen.getAllByAltText(/Le Père Goriot/i)).toHaveLength(1);
  });
});

describe('Cards', () => {
  it('renders list of cads', () => {
    render(<Home />);
    expect(screen.getAllByRole('img')).toHaveLength(12);
    expect(screen.getAllByText(/buy/i)).toHaveLength(12);
    expect(screen.getAllByText(/add/i)).toHaveLength(12);
  });
});

describe('About', () => {
  it('renders about page', () => {
    render(<About />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
