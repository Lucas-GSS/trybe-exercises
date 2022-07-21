const conflict = (message) => {
  const error = new Error(message);
  error.name = 'Conflict';
  return error;
};

module.exports = conflict;
