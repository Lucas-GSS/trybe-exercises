const express = require('express');

const { getAll, getById } = require('../model/authorModel');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const author = await getById(id);
  return res.status(200).json(author);
});

router.get('/', async (_req, res) => {
  const authors = await getAll();
  return res.status(200).json(authors);
});

module.exports = router;
