const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM books;';
  const [books] = await connection.query(query);
  return books;
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id = ?';
  const [books] = await connection.query(query, [authorId]);
  return books;
};

const getById = async (id) => {
  const query = 'SELECT * FROM books where id = ?;';
  const [book] = await connection.query(query, [id]);
  return book;
}

module.exports = { getAll, getByAuthorId, getById };