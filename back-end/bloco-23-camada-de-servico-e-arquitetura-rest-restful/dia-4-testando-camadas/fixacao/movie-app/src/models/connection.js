const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
});

module.exports = connection;
