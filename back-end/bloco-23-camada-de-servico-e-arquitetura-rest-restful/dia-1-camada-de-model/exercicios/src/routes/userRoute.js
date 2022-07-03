const { Router } = require('express');
const express = require('express');
const { validateName, validateEmail, validatePassword } = require('../middlewares/validations');
const { createUser } = require('../models/userModel');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword ,async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const insertUser = await createUser(firstName, lastName, email, password);
  return res.status(201).json({
    id: insertUser,
    firstName,
    lastName,
    email
  });
})

module.exports = userRouter;