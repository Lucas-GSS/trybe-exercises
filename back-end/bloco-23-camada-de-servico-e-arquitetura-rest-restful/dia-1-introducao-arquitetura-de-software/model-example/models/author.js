const connection = require('./connection');

const serialize = ({ id, first_name, middle_name, last_name, nationality }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  nationality,
});

async function getAll () {
  const query = 'SELECT * FROM model_example.authors;';
  const [authors] = await connection.execute(query);
  return authors.map(serialize)
}

async function findById(authorId) {
  const query = 'SELECT * FROM model_example.authors WHERE id = ?';
  const [author] = await connection.execute(query, [authorId]);
  return author.map(serialize)[0];
};

function validateName(first_name, middle_name, last_name) {
  if (!first_name || typeof(first_name) !== 'string') return false;
  if (!last_name || typeof(last_name) !== 'string') return false;
  return true;
}

async function createAuthor(first_name, middle_name, last_name) {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);'
  await connection.execute(query, [first_name, middle_name, last_name]);
}

module.exports = { getAll, findById, validateName, createAuthor };
