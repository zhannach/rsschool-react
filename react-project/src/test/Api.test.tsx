import React from 'react';

import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';
import { act } from 'react-dom/test-utils';

describe('Cards', () => {
  it('fetches list of cards', async () => {
    render(<Home />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    const cards = await screen.findAllByRole('img');
    expect(cards).toHaveLength(30);
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });
  });
});

describe('Card', () => {
  it('fetch Card', async () => {
    render(<Home />);
    act(() => {
      userEvent.click(screen.getByRole('button'));
    });
    const card = await screen.findByText(/Introduction to React/i);
    expect(card).toBeInTheDocument();
    expect(card.firstChild).not.toBeNull();
  });
});

describe('ModalCard', () => {
  it('open modal', async () => {
    render(<Home />);
    act(() => {
      userEvent.click(screen.getByRole('button'));
    });
    const card = await screen.findByText(/Introduction to React/i);
    act(() => {
      userEvent.click(card);
    });
    const lang = await screen.findAllByText(/language/i);
    const publishYear = await screen.findByText(/year/i);
    const pages = await screen.findByText(/pages/i);
    expect(lang[0]).toBeInTheDocument;
    expect(publishYear).toBeInTheDocument;
    expect(pages).toBeInTheDocument;
  });
});

describe('ModalCard', () => {
  it('close modal', async () => {
    render(<Home />);
    const card = await screen.findByText(/Introduction to React/i);
    act(() => {
      userEvent.click(card);
    });
    const lang = await screen.findAllByText(/Language/i);
    expect(lang[0]).toBeInTheDocument();
    const modalClose = screen.getByTestId('close-modal');
    await userEvent.click(modalClose);
    await waitFor(() => {
      expect(lang[0]).not.toBeInTheDocument();
    });
  });
});

describe('Error Message', () => {
  it('fetches search card', async () => {
    render(<Home />);
    await userEvent.type(screen.getByRole('searchbox'), 'javascript');
    await userEvent.click(screen.getByRole('button'));
    const card = await screen.findByText(/JavaScript с нуля/i);
    expect(card).toBeInTheDocument();
  });
});

describe('Error Message', () => {
  it('fetches with error', async () => {
    render(<Home />);
    await userEvent.type(screen.getByRole('searchbox'), 'acvfghj');
    await userEvent.click(screen.getByRole('button'));
    const error = await screen.findByText(/Oops, it looks like there is no such book/i);
    expect(error).toBeInTheDocument();
  });
});
