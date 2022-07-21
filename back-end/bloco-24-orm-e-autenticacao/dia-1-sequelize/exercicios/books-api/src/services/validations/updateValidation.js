const Joi = require('joi');

const updateSchema = Joi.object({
  title: Joi.string().min(2),
  author: Joi.string().min(3).allow(""),
  pageQuantity: Joi.number().integer().positive(),
}).required();

module.exports = updateSchema;