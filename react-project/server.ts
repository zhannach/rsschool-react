import { readFileSync } from 'fs';
import path from 'path';
import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer(isProd = process.env.NODE_ENV === 'production') {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: isTest ? 'error' : 'info',
  });

  app.use(vite.middlewares);
  app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
  app.use(compression());

  const html = readFileSync(path.resolve(__dirname, 'dist/client/index.html')).toString();

  const parts = html.split('<!--app-html-->');
  const { render } = await vite.ssrLoadModule(
    path.join(__dirname, './src/client/entry-server.tsx')
  );
  console.log(render);
  app.use('*', async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(parts[0]);
    const pipe = await render(req.url, {
      onShellReady() {
        pipe(res);
      },
      onShellError() {},
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
      onError(err) {
        console.error(err);
      },
    });
  });
  const port = process.env.PORT || 3030;
  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();
