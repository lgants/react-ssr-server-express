import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'))
app.get('*', (req, res) => {
  // Create store outside renderer 
  const store = createStore();

  // Pass request into renderer, which passes request to StaticRouter that uses the request to decide the components used to render on the screen
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
