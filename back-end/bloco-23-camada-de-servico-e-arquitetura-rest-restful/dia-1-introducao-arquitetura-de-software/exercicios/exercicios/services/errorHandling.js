const errorMiddleware = (err, _req, res, _next) => {
  return res.status(400).json(err.message)
};

module.exports = errorMiddleware;