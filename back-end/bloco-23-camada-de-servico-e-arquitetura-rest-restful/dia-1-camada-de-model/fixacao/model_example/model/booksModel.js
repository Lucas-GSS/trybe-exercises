const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM books;';
  const [books] = await connection.query(query);
  return books;
};

const getById = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id = ?';
  const [books] = await connection.query(query, [authorId]);
  return books;
}

module.exports = { getAll, getById };