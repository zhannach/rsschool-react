import serialize from "serialize-javascript";
import { RootState } from "../client/redux/store";

interface TTemplate {
  header: string;
  footer: string;
}

export const getHtmlTemplate = (preloadedState: Partial<RootState>): TTemplate => ({
  header: `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        content="width=device-width,initial-scale=1,maximum-scale=10,minimum-scale=.25,user-scalable=yes"
        name="viewport"
      />
      <meta name="application-name" content="App" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta content="text/html; charset=utf-8" http-equiv="content-type" />
    </head>
        <body>
          <div id="app" style="height: 100%; width: 100%">`,
  footer: `</div>
          <script>window.__PRELOADED_STATE__ = ${serialize(preloadedState)}</script>
        </body>
      </html>
  `,
});
