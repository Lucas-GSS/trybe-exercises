const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const User = require('./model/user');
const validateDatasMid = require('../middlewares/validateDatas');
const errorMiddleware = require('../middlewares/errorHandling');

app.use(bodyParser.json());

app.post('/users', validateDatasMid ,async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  return res.status(201).json({ message: 'Created sucessfully: ', firstName, lastName, email, password });
});

app.get('/users', async(req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
});

app.use(errorMiddleware)

app.listen(3001, console.log('online na 3001'))