const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const {
  getAllRecipes,
  getBySearchTerm,
  getById,
  createRecipe,
} = require('../middlewares/recipesMiddlewares');

const { validateName, validatePrice } = require('../middlewares/validations');

router.get('/', rescue(getAllRecipes));

router.get('/search', rescue(getBySearchTerm));

router.get('/:id', rescue(getById));

router.post('/', rescue([validateName, validatePrice, createRecipe]));


module.exports = router;