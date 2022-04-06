const connection = require('./connection');

async function createUser(firstName, lastName, email, password) {
  const query = `INSERT INTO model_example.user
    (first_name, last_name, email, password) VALUES (?, ?, ?, ?);`;
  await connection.execute(query, [firstName, lastName, email, password]);
};

async function getAll() {
  const query = 'SELECT * FROM model_example.user;';
  const [users] = await connection.execute(query);
  return  users;
}

module.exports = { createUser, getAll }
