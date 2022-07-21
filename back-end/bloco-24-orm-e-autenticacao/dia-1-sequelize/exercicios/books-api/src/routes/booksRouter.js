const express = require('express');

const booksRouter = express.Router();

const booksController = require('../controllers/booksControllers');

booksRouter.get('/', booksController.getAll);

booksRouter.post('/', booksController.create);

booksRouter.get('/:id', booksController.getById);

booksRouter.put('/:id', booksController.update);

booksRouter.delete('/:id', booksController.remove);


module.exports = booksRouter;
