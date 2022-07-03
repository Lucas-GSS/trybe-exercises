const express = require('express');
const { getAll, getByAuthorId, getById } = require('../model/booksModel');

const router = express.Router();

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const book = await getById(id);
  return res.status(200).json(book);
})

router.get('/search/', async(req, res) => {
  const { authorId } = req.query;
  const books = await getByAuthorId(authorId);
  return res.status(200).json(books);
});

router.get('/', async (_req, res) => {
  const books = await getAll();
  return res.status(200).json(books);
});

module.exports = router;
