const express = require('express');
const app = express();
const authMiddleware = require('./middlewares/auth-middleware');
const recipesRouter = require('./routers/recipesRouter');
const drinksRouter = require('./routers/drinksRouter');
const errorHandler = require('./middlewares/error');

app.use(express.json());

app.use(authMiddleware);

app.use('/recipes', recipesRouter);

app.use('/drinks', drinksRouter);

app.use(errorHandler)

app.listen(3002, () => console.log('rodando na 3002'));