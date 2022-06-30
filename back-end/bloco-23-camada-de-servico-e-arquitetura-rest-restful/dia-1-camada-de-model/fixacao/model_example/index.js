const express = require('express');

require('dotenv').config();

const authorRouter = require('./routes/authorRoute');
const bookRouter = require('./routes/booksRoute');

const app = express();

app.use('/authors', authorRouter);

app.use('/books', bookRouter)

app.listen(process.env.PORT, console.log(`Rodando na ${process.env.PORT}`));