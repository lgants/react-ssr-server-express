import express from 'express';
import renderer from './helpers/renderer';


const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
  // Pass request into renderer, which passes request to StaticRouter that uses the request to decide the components used to render on the screen
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
