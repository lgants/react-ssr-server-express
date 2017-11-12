import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  porxyReqOptDecorator(opts) {
    opts.header['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(express.static('public'))
app.get('*', (req, res) => {
  // Create store outside renderer
  const store = createStore();

  // Array of promises representing pending network requests
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData : null;
  });

  Promise.all(promises).then(() => {
    // Pass request into renderer, which passes request to StaticRouter that uses the request to decide the components used to render on the screen
    // Sends the response after all promises are resolved
    res.send(renderer(req, store));

  })
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
