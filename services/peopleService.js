const model = require('../models/peopleModel');

const getAll = async () => model.getAll();

const getById = async (id) => {
  const person = await model.getById(id);

  if (!person) {
    throw { code: 'not_found', message: `Person with ID ${id} was not found` };
  }

  return person;
};

const create = async (name, age, phoneNumbers) => {
  if (age < 18) {
    throw {
      code: 'underage_person',
      message: 'Only people with 18 or more years can be inserted',
    };
  }

  return model.create(name, age, phoneNumbers);
};

module.exports = {
  getAll,
  getById,
  create,
};
