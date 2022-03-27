const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./getAndSetSimpsons');

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if( Number(age) <= 17) return res.status(401).json({ message: 'Unauthorized' });
  return res.status(200).json({ message: `Hello, ${name}` });
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})


app.get('/simpsons', (req, res) => {
  const simpsons = getSimpsons();
  return res.status(200).send(simpsons)
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpsons = getSimpsons();
  console.log(simpsons)
  const requiredSimpson = simpsons.find((simpson) => simpson.id === id);
  if (requiredSimpson === undefined) return res.status(404).json({ message: 'simpson not found' })
  return res.status(200).send(requiredSimpson);
});

const port = 3001;
app.listen(port, console.log(`Running on locallhost:${port}`));