const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query = 'INSERT INTO model_example.movies (title, release_year, directed_by) VALUES(?, ?, ?);'
  const [result] = await connection.execute(query, [title, releaseYear, directedBy]);
  return { id: result.insertId };
}

module.exports = { create };