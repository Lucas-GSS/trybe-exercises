const express = require('express');

require('express-async-errors');

require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.listen(PORT, console.log(`rodando na ${PORT}`));