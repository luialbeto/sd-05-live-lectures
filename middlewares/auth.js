const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const secret = 'shhhh...é segredo';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'missing auth token' });

  try {
    const payload = jwt.verify(token, secret, {
      audience: 'identity',
      issuer: 'post-api',
    });

    if (typeof payload === 'string') throw new Error('invalid token');

    const user = await userModel.findUser(payload.userData.username);

    if (!user) throw new Error('invalid token');

    const { password: _, ...userWithoutPassword } = user;

    req.user = userWithoutPassword;

    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
