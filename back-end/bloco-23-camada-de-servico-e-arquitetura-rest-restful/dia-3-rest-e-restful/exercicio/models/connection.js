const mysql2 = require('mysql2');

const { DATABASE, PASS, USER, HOST } = process.env;

const connection = mysql2.createPool({
  host: HOST,
  user: USER,
  password: PASS,
  database: DATABASE,
});

module.exports = connection;
