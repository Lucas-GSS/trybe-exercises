const express = require('express');
const pingRouter = require('./routes/pingRoute');

require('express-async-errors');

require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use('/ping', pingRouter);

app.listen(PORT, console.log(`rodando na ${PORT}`));