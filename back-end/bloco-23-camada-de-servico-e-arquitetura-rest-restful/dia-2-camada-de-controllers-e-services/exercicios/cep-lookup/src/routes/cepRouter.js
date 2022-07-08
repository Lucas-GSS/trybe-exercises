const express = require('express');
const get = require('../controllers/cepController');

const cepRouter = express.Router();

cepRouter.get('/:cep', get);

module.exports = cepRouter;