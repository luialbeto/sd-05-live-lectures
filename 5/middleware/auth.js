module.exports = (req, res, next) => {
  if (req.query.user === "batata") {
    req.user = {
      name: "batata",
    };
    return next();
  }
  res.status(401).json({ message: "Você não é uma batata" });
};
