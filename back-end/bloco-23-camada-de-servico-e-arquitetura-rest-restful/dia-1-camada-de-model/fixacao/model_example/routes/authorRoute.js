const express = require('express');

const getAll = require('../model/authorModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const authors = await getAll();
  return res.status(200).json(authors);
});

module.exports = router;
