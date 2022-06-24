const drinks = require('../db/drinks');

const getAllDrinks = (_req, res) => res.status(200).json(drinks);

const getBySearchTerm = (req, res) => {
  const { name } = req.query;
  const drink = drinks.filter((drink) => drink.name.includes(name));
  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada' });
  return res.status(200).json(drink);
};

const getById = (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((recipe) => recipe.id === Number(id));
  if(!drink) return res.status(404).json({ message: 'Bebida não encontrada' });
  return res.status(200).json(drink)
};

const createDrink = (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  return res.status(201).json({ message: 'Bebida adicionada com sucesso' });
};

const updateDrink = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));
  drinks[drinkIndex] = { id, name, price };
  return res.status(200).json({ message: 'Bebida atualizada' });
};

const deleteDrink = (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id))
  drinks.splice(drinkIndex, 1);
  return res.status(200).json({ message: 'Bebida removida com sucesso' });
}

module.exports = {
  getAllDrinks,
  getBySearchTerm,
  getById,
  createDrink,
  updateDrink,
  deleteDrink,
};