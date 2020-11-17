module.exports = (req, res, next) => {
  console.log("Hello from dummy");
  setTimeout(() => {
    const responseTime = Date.now() - req.startTime;
    res.status(200).json({
      user: req.user,
      method: req.method,
      responseTime,
    });
  }, 1000);
};
