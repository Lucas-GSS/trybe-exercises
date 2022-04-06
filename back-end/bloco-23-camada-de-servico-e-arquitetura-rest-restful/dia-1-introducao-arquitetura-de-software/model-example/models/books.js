const connection = require('./connection');

const serialize = ({ id, title, author_id }) => ({
  id,
  title,
  authorId: author_id,
});

async function getAll() {
  const query = 'SELECT * FROM model_example.books;'
  const [books] = await connection.execute(query);
  return books.map(serialize);
}

async function getByAuthorId(authorId) {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?';
  const [book] = await connection.execute(query, [authorId]);
  return book.map(serialize);
}

async function findById(bookId) {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;';
  const [book] = await connection.execute(query, [bookId]);
  return book[0];
}

async function validateBook(title, authorId) {
  const [idList] = await connection.execute('SELECT id FROM model_example.authors;');
  if (!title || title.length < 3) return false;
  if (!authorId || idList.every(({id}) => id !== authorId)) return false;
  return true;
}

async function createBook(title, authorId) {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);';
  await connection.execute(query, [title, authorId]);
}

module.exports = { getAll, getByAuthorId, findById, validateBook, createBook };
