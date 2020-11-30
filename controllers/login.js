const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = 'shhhh...é segredo';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.findUser(username);

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ message: 'Usuário não existe ou senha inválida' });
    }

    const { password: _, ...userWithoutPassword } = user;

    const payload = {
      iss: 'post-api', // Issuer -> Quem emitiu o token
      aud: 'identity', // Audience -> Quem deve aceitar este token
      sub: user._id, // Subject -> A quem se refere esse token
      userData: userWithoutPassword,
    };

    const token = jwt.sign(payload, secret, jwtConfig); // Garantindo que quem lê o token saiba que é verdade esse bilete

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
