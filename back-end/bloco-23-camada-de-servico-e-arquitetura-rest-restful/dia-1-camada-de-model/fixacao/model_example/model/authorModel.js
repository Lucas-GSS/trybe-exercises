const connection = require('./connection');

const serialize = (author) => ({
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name,
});

const getAll = async () => {
  const query = 'SELECT * FROM authors;';
  const [authors] = await connection.query(query);
  return authors.map(serialize);
}

const getById = async (id) => {
  const query = 'SELECT * FROM authors WHERE id = ?';
  const [author] = await connection.query(query, [id]);
  return author;
}

module.exports = { getAll, getById };
