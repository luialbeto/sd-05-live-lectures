const { ObjectId } = require('mongodb');

const getCollection = require('./connection');

const getAll = async () =>
  getCollection('songs').then((songs) => songs.find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return getCollection('songs').then((db) => db.findOne(ObjectId(id)));
};

const getByNameAndAlbum = async ({ name, album }) => {
  return getCollection('songs').then((songs) =>
    songs.findOne({ name, album }).toArray()
  );
};

const create = async ({ name, album }) => {
  const song = await getCollection('songs').then((db) =>
    db.insertOne({ name, album })
  );
  return { _id: song.insertedId, name, album };
};

const update = async ({ id, name, album }) => {
  if (!ObjectId.isValid(id)) return null;

  const song = await getCollection('songs').then((songs) =>
    songs.updateOne({ _id: ObjectId(id) }, { $set: { name, album } })
  );

  return song;
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return getCollection('songs').then((db) => {
    return db.deleteOne({ _id: ObjectId(id) });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
  getByNameAndAlbum,
};
