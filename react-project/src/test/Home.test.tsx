import React from 'react';

import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../components/Search';
import About from '../pages/About';

const mock = vi.fn();

describe('Search', () => {
  it('renders search input', () => {
    render(<Search setValue={mock} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveValue('');
  });
});

describe('Search', () => {
  it('renders search button', () => {
    render(<Search setValue={mock} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/search/i);
  });
});

describe('Search event', () => {
  it('types into the input', async () => {
    render(<Search setValue={mock} />);
    const input = screen.getByRole('searchbox');
    expect(screen.queryByText(/react/i)).toBeNull();
    await userEvent.type(screen.getByRole('searchbox'), 'react');
    expect((input as HTMLInputElement).value).toBe('react');
  });
});

describe('Search focus', () => {
  it('input focus', () => {
    render(<Search setValue={mock} />);
    const input = screen.getByRole('searchbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

describe('About', () => {
  it('renders about page', () => {
    render(<About />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
