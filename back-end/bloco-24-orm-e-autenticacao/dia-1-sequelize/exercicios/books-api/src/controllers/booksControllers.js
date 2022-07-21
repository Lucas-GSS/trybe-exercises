const booksService = require('../services/booksServices');

/**
 * @type {import('express').RequestHandler}
 */

const getAll = async (_req, res) => {
  const books = await booksService.getAll();
  return res.json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await booksService.getById(id);
  return res.json(book);
};

const create = async (req, res) => {
  const { body } = req;
  const newBook = await booksService.create(body);
  return res.status(201).json(newBook)
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  await booksService.update(id, { title, author, pageQuantity });
  res.json({ message: { title, author, pageQuantity } });
};

const remove = async (req, res) => {
  const { id } = req.params;
  await booksService.remove(id);
  return res.status(204).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
