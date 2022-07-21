const errorMap = {
  NotFound: 404,
  ValidationError: 400,
  Conflict: 409,
};

const errorHandler = ({ name, message }, _req, res, _next) => {
  const statusCode = errorMap[name];
  console.log(message)
  if (!statusCode) return res.status(500).json({ message: 'Internal error server' });
  return res.status(statusCode).json({ message })
};

module.exports = errorHandler;
