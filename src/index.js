import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  // need to manually include script tag to ensure the browser goes back to the server to request the bundle
  const html = '
    <html>
      <head></head>
      <body>
        <div>${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  '
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
