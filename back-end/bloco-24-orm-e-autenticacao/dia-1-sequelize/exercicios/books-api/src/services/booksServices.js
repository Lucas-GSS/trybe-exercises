const { Book } = require('../models/index');
const { notFound } = require('./errors/notFound');
const attributesSchema = require('./validations/attributesValidation');
const idSchema = require('./validations/idValidation');
const updateSchema = require('./validations/updateValidation');

const getAll = async () => {
  const books = await Book.findAll();
  if (!books) throw notFound('Books not found');
  return books;
};

const getById = async (id) => {
  const validId = await idSchema.validateAsync(id);
  const book = await Book.findByPk(validId);
  if (!book) throw notFound('Book not found');
  return book;
};

const create = async (attributes) => {
  const validAttributes = await attributesSchema.validateAsync(attributes);
  const newBook = await Book.create(validAttributes);
  return newBook;
};

const update = async (id, { title, author, pageQuantity }) => {
  const book = await getById(id);
  if (!book) throw notFound('Book not found');
  updateSchema.validateAsync({ title, author, pageQuantity });
  const updatedBook = await Book.update({ title, author, pageQuantity }, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const validId = await idSchema.validateAsync(id);
  const exists = await getById(validId);
  if (!exists) throw notFound('Book not found');
  const removedBook = await Book.destroy({ where: { id: validId } })
  return removedBook
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
