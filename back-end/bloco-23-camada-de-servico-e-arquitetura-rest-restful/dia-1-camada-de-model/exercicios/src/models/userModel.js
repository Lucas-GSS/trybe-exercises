const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = `INSERT INTO users (first_name, last_name, email, user_password) VALUES (?, ?, ?, ?);`;
  const [insertUser] = await connection.query(query, [firstName, lastName, email, password]);
  return insertUser.insertId;
}

module.exports = { createUser };