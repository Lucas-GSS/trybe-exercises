const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { getAll, findById, createAuthor } = require('./controllers/Authors');

app.use(bodyParser.json());

app.get('/authors', getAll);

app.get('/authors/:id', findById);

app.post('/authors', createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
