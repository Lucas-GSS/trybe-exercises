const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.use(express.json())

app.get('/recipes', (_req, res) => res.status(200).json(recipes));

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const recipe = recipes.filter((recipe) => recipe.name.includes(name) && recipe.price <= Number(maxPrice));
  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada' });
  return res.status(200).json(recipe);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  if(!recipe) return res.status(404).json({ message: 'Receita não encontrada' });
  return res.status(200).json(recipe)
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  const insertNewRecipe = recipes.push({id, name, price, waitTime});
  return res.status(201).json({ message: 'Receita criada com sucesso' });
});


app.get('/drinks', (_req, res) => res.status(200).json(drinks.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return true;
  }
})));

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const drink = drinks.filter((drink) => drink.name.includes(name));
  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada' });
  return res.status(200).json(drink);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((recipe) => recipe.id === Number(id));
  if(!drink) return res.status(404).json({ message: 'Bebida não encontrada' });
  return res.status(200).json(drink)
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  return res.status(201).json({ message: 'Bebida adicionada com sucesso' });
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));
  drinks[drinkIndex] = { id, name, price };
  return res.status(200).json({ message: 'Bebida atualizada' });
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id))
  drinks.splice(drinkIndex, 1);
  return res.status(200).json({ message: 'Bebida removida com sucesso' });
});

app.listen(3002, () => console.log('rodando na 3002'));