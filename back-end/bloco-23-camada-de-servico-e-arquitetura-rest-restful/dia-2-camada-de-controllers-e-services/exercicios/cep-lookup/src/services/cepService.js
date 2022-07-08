const { getAdressByCep } = require('../models/cepModels');
const cepSchema = require('./validations/cepValidation');

const notFound = (message) => {
  const error = Error(message);
  error.name = 'NotFound';
  return error;
};

const getAddress = async (cep) => {
  const result = await cepSchema.validateAsync(cep);
  const address = await getAdressByCep(result);
  if (!address) throw notFound('"address" not found');
  return address;
};

module.exports = { getAddress };