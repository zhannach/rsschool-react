import React from 'react';

import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

import App from '../App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('React Router', () => {
  it('render home page', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const navbar = screen.getByRole('navigation');
    const link = screen.getAllByRole('link');
    expect(container.innerHTML).toMatch('Home');
    expect(navbar).toContainElement(link[0]);
  });
});

describe('React Router', () => {
  it('should navigate to page', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const title = screen.getByRole('heading');
    const link = screen.getByText('About Us');
    expect(title).not.toHaveTextContent('About Us');
    fireEvent.click(link);
    expect(link).toHaveClass('_active-link_c088e7');
    expect(title).toHaveTextContent('About Us');
  });
});

describe('React Router', () => {
  it('should navigate to 404 page', () => {
    const badRoute = '/error';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/This page doesn't exist. Back to/)).toBeInTheDocument();
  });
});
