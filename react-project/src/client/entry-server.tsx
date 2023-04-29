import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { initStore, RootState, Store } from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { Item } from '../client/types/form';
import { apiRequest } from '../server/middlewares/apiMiddle';

export async function getStore() {
  const preloadState = {
    search: { value: '' },
    card: { cardId: '' },
    form: { formCards: [] as Item[] },
  } as Partial<RootState>;
  const store = initStore(preloadState);
  await apiRequest(store);
  return store;
}

export function render(
  url: string,
  store: Store,
  opts: ReactDOMServer.RenderToPipeableStreamOptions | undefined
) {
  const persistor = persistStore(store);
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </StaticRouter>
    </React.StrictMode>,
    opts
  );
  return pipe;
}
