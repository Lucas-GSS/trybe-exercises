const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const {
  getAllDrinks,
  getBySearchTerm,
  getById,
  createDrink,
  updateDrink,
  deleteDrink
} = require('../middlewares/drinksMiddlewares');

const { validateName, validatePrice } = require('../middlewares/validations');

router.get('/', rescue(getAllDrinks));

router.get('/search', rescue(getBySearchTerm));

router.get('/:id', rescue(getById));

router.post('/', rescue([validateName, validatePrice, createDrink]));

router.put('/:id', rescue([validateName, validatePrice, updateDrink]));

router.delete('/:id', rescue(deleteDrink));

module.exports = router;