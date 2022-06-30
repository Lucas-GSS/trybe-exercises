const express = require('express');
const { getAll, getById } = require('../model/booksModel');

const router = express.Router();

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const books = await getById(id);
  return res.status(200).json(books);
});

router.get('/', async (_req, res) => {
  const books = await getAll();
  return res.status(200).json(books);
});

module.exports = router;
