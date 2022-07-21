const notFound = (message) => {
  const error = new Error(message);
  error.name = 'NotFound';
  return error;
}

module.exports = {
  notFound,
};
