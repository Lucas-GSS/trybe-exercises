const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
})

app.listen(3001, console.log('rodando na 3001'));