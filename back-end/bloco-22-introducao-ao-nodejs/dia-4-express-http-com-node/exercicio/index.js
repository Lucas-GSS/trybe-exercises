const express = require('express');

const app = express();
const fs = require('fs/promises');

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age < 18) return res.status(401).json({ message: 'Unauthorized' });
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  if (!simpsons) return res.status(404).json({ message: 'No characters found' });
  return res.status(200).json({ message: JSON.parse(simpsons) });
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const selectedSimpson = JSON.parse(simpsons).find((simpson) => simpson.id === id);
  if (!selectedSimpson) return res.status(404).json({ message: 'Character not found' });
  return res.status(200).json({ message: selectedSimpson });
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
  const alreadyExists = simpsons.find((simpson) => simpson.id === id);
  if (alreadyExists) return res.status(409).json({ message: 'Character already exists' });
  simpsons.push({ id, name });
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  return res.status(204).end()
});

app.listen(3001, console.log('rodando na 3001'));