const model = require('../models/songModel');

const getAll = async () => model.getAll();

const getById = async (id) => {
  const song = await model.getById(id);

  if (!song) {
    return {
      error: true,
      code: 'not_found',
      message: `Song with id ${id} was not found`,
    };
  }

  return song;
};

const create = async ({ name, album }) => {
  const songExists = await model.getByNameAndAlbum({ name, album });

  if (songExists) {
    return {
      error: true,
      code: 'already_exists',
      message: 'A song with this name and album already exists',
    };
  }

  const newSong = await model.create({ name, album });

  return newSong;
};

module.exports = {
  getAll,
  create,
};
