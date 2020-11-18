const middlewares = require('.');

module.exports = (middleware) => async (req, res, next) => {
  try {
    middleware(req, res, next);
  } catch (err) {
    next(err);
  }
};
