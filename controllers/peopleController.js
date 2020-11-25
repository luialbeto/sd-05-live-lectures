const { Router } = require('express');

const service = require('../services/peopleService');

const people = Router();

// GET /people/ -> Comportamento de getAll
people.get('/', async (req, res) => {
  const people = await service.getAll();

  res.status(200).json(people);
});

/* Rotas que têm parâmetros devem vir depois de rotas que não têm parâmetros.
Isso evita conflito entre as rotas */

// GET /people/:id -> Comportamento de getById
people.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const person = await service.getById(id);

    res.status(200).json(person);
  } catch (err) {
    if (err.code === 'not_found') {
      return res.status(404).json(err);
    }

    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// GET /people/:id/phoneNumbers -> Comportamento de getById, retornando apenas a propriedade phoneNumbers
people.get('/:id/phoneNumbers', async (req, res) => {
  try {
    const { id } = req.params;

    const person = await service.getById(id);

    res.status(200).json(person.phoneNumbers);
  } catch (err) {
    if (err.code === 'not_found') {
      return res.status(404).json(err);
    }

    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// POST /people/ -> Comportamento de create
people.post('/', async (req, res) => {
  try {
    const { name, age, phoneNumbers = [] } = req.body;

    const newPerson = await service.create(name, age, phoneNumbers);

    res.status(201).json(newPerson);
  } catch (err) {
    if (err.code === 'underage_person') {
      return res.status(403).json(err);
    }

    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// PUT /people/:id -> Comportamento de update

// DELETE /people/:id -> Comportamento de delete

module.exports = people;
