const express = require('express');
const errorHandler = require('./middleware/errorHandler');

require('express-async-errors');

const app = express();

const booksRouter = require('./routes/booksRouter')

app.use(express.json());

app.use('/books', booksRouter);

app.use(errorHandler)

app.listen(3000, () => console.log('Rodando na 3000'));

// para não ter que importar o dotenv, usar o comando "-r dotenv/config" no meio do  depois do --watch src script start ou dev