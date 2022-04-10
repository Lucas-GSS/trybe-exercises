const MovieModel = require('../models/movieModel');

const validate = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;
  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isValid = validate(title, directedBy, releaseYear);
  if (!isValid) return false;
  const { id } = await MovieModel.create({ title, directedBy, releaseYear });
  return { id };
};

module.exports = { create };
