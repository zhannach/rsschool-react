import React from 'react';

import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';

import Home from '../client/pages/Home';
import { act } from 'react-dom/test-utils';
import { initStore, RootState } from '../client/redux/store';
import { Provider } from 'react-redux';

import { errorHandler, handlers } from './mock/handlers.mock';
import { Item } from 'client/types/form';
export const preloadState = {
  search: { value: '' },
  card: { cardId: '' },
  form: { formCards: [] as Item[] },
} as Partial<RootState>;

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Cards', () => {
  it('fetches list of cards', async () => {
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    const cards = await screen.findAllByRole('img');
    expect(cards).toHaveLength(2);
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });
  });
});

describe('Card', () => {
  it('fetch Card', async () => {
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
    const card = await screen.findByText(/Introduction to React/i);
    expect(card).toBeInTheDocument();
    expect(card.firstChild).not.toBeNull();
  });
});

describe('ModalCard', () => {
  it('open modal', async () => {
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
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
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
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

describe('Search Card', () => {
  it('fetches search card', async () => {
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
    await userEvent.type(screen.getByRole('searchbox'), 'JavaScript');
    await userEvent.click(screen.getAllByRole('button')[0]);
    const card = await screen.findByText(/Coding with JavaScript For Dummies/i);
    expect(card).toBeInTheDocument();
  });
});

describe('Error Message', () => {
  it('fetches with error', async () => {
    render(
      <Provider store={initStore(preloadState)}>
        <Home />
      </Provider>
    );
    server.use(...errorHandler);
    await userEvent.type(screen.getByRole('searchbox'), 'dfhgdfhgdfhgdfg');
    const button = screen.getAllByRole('button');
    await userEvent.click(button[0]);
    const error = await screen.findByRole('img');
    expect(error).not.toBeInTheDocument();
  });
});
