const boom = require('@hapi/boom');

module.exports = (required = false) => {
  // Retorna um middleware
  return (req, res, next) => {
    if (!req.headers.authorization && required) {
      return next(boom.unauthorized('no auth token'));
    }

    return next();
  };
};
