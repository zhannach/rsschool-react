import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

export function render(
  url: string,
  opts: ReactDOMServer.RenderToPipeableStreamOptions | undefined
) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>,
    opts
  );
  return pipe;
}
