const express = require('express');

const app = express();

const { User } = require('./models/index');

app.use(express.json());

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  console.log(user);
  return res.status(200).json(user);
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone } = req.body;
  const updateUser = await User.update(
    {fullName, email, phone},
    { where: { id } }
  ); // retorna um objeto com o usuário atualizado
  return res.status(200).json(updateUser)
});

app.post('/users', async (req, res) => {
  const { fullName, email, phone } = req.body;
  const createUser = await User.create({fullName, email, phone}); // retorna um objeto do novo usuário criado
  return res.status(201).json(createUser)
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({where: { id }}); // retorna 1 se achar o id e excluir o usuário; retorna 0 caso não exlua
  return res.status(200).json({ message: 'Usuário excluído;' });
});

app.get('/users', async (req, res) => {
  const users = await User.findAll(); // retorna um array de objetos que contém os dados da tabela
  return res.status(200).json(users)
});


app.listen(3000, console.log(`Rodando na 3000`));
