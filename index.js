const boom = require('boom');
const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');
const charactersModel = require('./models/charactersModel');

const app = express();

app.use(bodyParser.json());

app.get(
  '/characters',
  rescue(async (req, res) => {
    const characters = await charactersModel.getAll();

    res.status(200).json(characters);
  })
);

app.post(
  '/characters',
  rescue(async (req, res) => {
    const { name, cartoon } = req.body;

    const character = await charactersModel.add(name, cartoon);

    res.status(201).json(character);
  })
);

app.get(
  '/characters/:id',
  rescue(async (req, res) => {
    const { id } = req.params;

    const character = await charactersModel.getById(id);

    if (!character) {
      throw boom.notFound(`character ${id} was not found`);
    }

    res.status(200).json(character);
  })
);

app.put(
  '/characters/:id',
  rescue(async (req, res) => {
    const { name, cartoon } = req.body;
    const { id } = req.params;

    await charactersModel.update(id, name, cartoon);

    res.status(204).end();
  })
);

app.delete(
  '/characters/:id',
  rescue(async (req, res) => {
    const { id } = req.params;

    await charactersModel.exclude(id);

    res.status(204).end();
  })
);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
