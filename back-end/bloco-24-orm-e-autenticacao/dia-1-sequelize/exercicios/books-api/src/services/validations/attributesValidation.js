const Joi = require('joi');

const attributesSchema = Joi.object({
  title: Joi.string().min(2).required(),
  author: Joi.string().min(3).required(),
  pageQuantity: Joi.number().integer().positive().required(),
}).required();

module.exports = attributesSchema;
