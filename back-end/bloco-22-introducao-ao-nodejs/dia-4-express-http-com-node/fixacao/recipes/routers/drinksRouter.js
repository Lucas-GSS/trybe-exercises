const express = require('express');
const {
  getAllDrinks,
  getBySearchTerm,
  getById,
  createDrink,
  updateDrink,
  deleteDrink
} = require('../middlewares/drinksMiddlewares');
const { validateName, validatePrice } = require('../middlewares/validations');

const router = express.Router();

router.get('/', getAllDrinks);

router.get('/search', getBySearchTerm);

router.get('/:id', getById);

router.post('/', validateName, validatePrice, createDrink);

router.put('/:id', validateName, validatePrice, updateDrink);

router.delete('/:id', deleteDrink);

module.exports = router;