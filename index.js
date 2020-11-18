const axios = require('axios');
const express = require('express');
const boom = require('@hapi/boom');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

let people = [
  { id: 0, name: 'Roz', age: 23 },
  { id: 1, name: 'Coruja', age: 24 },
];

const app = express();

app.use(bodyParser.json());
app.use(middlewares.logger);

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.post('/echo', (req, res) => {
  res.status(200).json(req.body);
});

app.get('/people', (_, res) => {
  res.status(200).json(people);
});

app.post('/people', (req, res, next) => {
  const { name, age } = req.body;

  const id = people.length;

  people.push({ id, name, age });

  res.status(201).json({ id, name, age });
});

app.put('/people/:id', (req, res, next) => {
  const { name, age } = req.body;
  const { id: stringId } = req.params;

  const id = parseInt(stringId);

  const personIndex = people.findIndex((person) => person.id === id);

  if (personIndex === -1) {
    return next(boom.notFound('pessoa não encontrada'));
  }

  people[personIndex] = { id, name, age };

  return res.status(200).json(people[personIndex]);
});

app.delete('/people/:id', middlewares.auth(true), (req, res) => {
  const { id: stringId } = req.params;
  const id = parseInt(stringId);

  people = people.filter((person) => person.id !== id);

  return res.status(204).end();
});

app.get(
  '/cats',
  rescue(async (_, res, next) => {
    const { data } = await axios.get(
      'https://api.thecatap.com/v1/images/search'
    );

    res.status(200).json(data);
  })
);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O PAI TÁ ON NA PORTA ${PORT}`);
});
