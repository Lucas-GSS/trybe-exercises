const express = require('express');
const {
  getAllRecipes,
  getBySearchTerm,
  getById,
  createRecipe,
} = require('../middlewares/recipesMiddlewares');

const { validateName, validatePrice } = require('../middlewares/validations');

const router = express.Router();

router.get('/', getAllRecipes);

router.get('/search', getBySearchTerm);

router.get('/:id', getById);

router.post('/', validateName, validatePrice, createRecipe);


module.exports = router;