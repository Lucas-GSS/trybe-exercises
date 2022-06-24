const recipes = require('../db/recipes');

const getAllRecipes = (_req, res) => res.status(200).json(recipes);

const getBySearchTerm = (req, res) => {
  const { name, maxPrice } = req.query;
  const recipe = recipes.filter((recipe) => recipe.name.includes(name) && recipe.price <= Number(maxPrice));
  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada' });
  return res.status(200).json(recipe);
};

const getById = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  if(!recipe) return res.status(404).json({ message: 'Receita não encontrada' });
  return res.status(200).json(recipe)
};

const createRecipe = (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({id, name, price, waitTime});
  return res.status(201).json({ message: 'Receita criada com sucesso' });
};

module.exports = {
  getAllRecipes,
  getBySearchTerm,
  getById,
  createRecipe
};