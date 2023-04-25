import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initStore, RootState } from './redux/store';

declare global {
  interface Window {
    __PRELOADED_STATE__: Partial<RootState>;
  }
}

const container = document.getElementById('app');
const store = initStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
