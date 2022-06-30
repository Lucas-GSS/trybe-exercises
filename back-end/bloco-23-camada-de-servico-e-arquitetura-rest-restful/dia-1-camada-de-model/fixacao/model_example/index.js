const express = require('express');

require('dotenv').config();

const authorRouter = require('./routes/authorRoute');

const app = express();

app.use('/authors', authorRouter);

app.listen(process.env.PORT, console.log(`Rodando na ${process.env.PORT}`));