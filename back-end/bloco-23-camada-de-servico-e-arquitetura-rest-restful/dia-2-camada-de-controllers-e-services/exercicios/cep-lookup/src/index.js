const express = require('express');
require('express-async-errors');

const cepRouter = require('./routes/cepRouter');
const pingRouter = require('./routes/pingRoute');

require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use('/cep', cepRouter);

app.use('/ping', pingRouter);

const errorMap = {
  ValidationError: 400,
  NotFound: 404,
};

app.use(({ name, message }, _req, res, _next) => {
  const code = errorMap[name];
  if (!code) return res.status(500).json({ message: 'Internal error server' });
  return res.status(code).json({ message });
});

app.listen(PORT, console.log(`rodando na ${PORT}`));