const Model = require('../models/user');

module.exports = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await Model.registerUser(username, password);

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
