const connection = require('./connection');

const serialize = (author) => ({
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name,
});

const getAll = async () => {
  const [authors] = await connection.query('SELECT * FROM authors;');
  return authors.map(serialize);
}

module.exports = getAll;
