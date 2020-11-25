const boom = require('boom');
const rescue = require('express-rescue');
const service = require('../services/songsService');
// const model = require('../models/songModel');

const getAll = rescue(async (req, res) => {
  const songs = await service.getAll();

  res.status(200).json(songs);
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const song = await service.getById(id);

  if (song.error && song.error.code === 'not_found') {
    throw boom.notFound(song.error.message);
  }

  if (song.error) next(song.error);

  res.status(200).json(song);
});

const create = rescue(async (req, res, next) => {
  const { name, album } = req.body;

  const createdSong = await service.create({ name, album });

  if (createdSong.error && createdSong.error.code === 'already_exists') {
    throw boom.conflict(createdSong.message);
  }

  if (createdSong.error) {
    return next(createdSong.error);
  }

  res.status(201).json(createdSong);
});

// const update = rescue(async (req, res) => {
//   const { id } = req.params;
//   const { name, album } = req.body;

//   await model.update({ id, name, album });

//   res.status(204).end();
// });

// const remove = rescue(async (req, res) => {
//   const { id } = req.params;

//   await model.exclude(id);

//   res.status(204).end();
// });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
