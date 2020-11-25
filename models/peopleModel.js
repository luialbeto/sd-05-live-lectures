const { ObjectId } = require('mongodb');
const getCollection = require('./get-collection');

const getAll = async () =>
  getCollection('people').then((people) => people.find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return getCollection('people').then((people) => people.findOne(ObjectId(id)));
};

const create = async (name, age, phoneNumbers) =>
  getCollection('people')
    .then((people) => people.insertOne({ name, age, phoneNumbers }))
    .then((result) => ({ _id: result.insertedId, name, age, phoneNumbers }));

module.exports = {
  getAll,
  getById,
  create,
};
