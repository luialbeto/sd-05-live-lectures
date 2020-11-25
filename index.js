const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const songModel = require('./models/songModel');
const songController = require('./controllers/songController');

const pingController = require('./controllers/pingController');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', pingController.ping);
app.get('/songs', songController.getAll);
app.post('/songs', songController.create);
app.put('/songs/:id', songController.update);
app.get('/songs/:id', songController.getById);
app.delete('/songs/:id', songController.remove);

app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
