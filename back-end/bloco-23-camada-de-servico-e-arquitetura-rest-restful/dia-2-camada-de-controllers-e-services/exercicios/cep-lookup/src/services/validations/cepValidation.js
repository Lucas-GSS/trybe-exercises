const Joi = require('joi');

const cepSchema = Joi.string().required().pattern(/^\d{5}-?\d{3}$/).label('cep');

module.exports = cepSchema;