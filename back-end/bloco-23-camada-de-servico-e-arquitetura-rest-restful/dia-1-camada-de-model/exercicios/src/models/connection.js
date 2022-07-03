require('dotenv').config();

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.USER,
  password: process.env.PASS,
  host: process.env.HOST,
  database: process.env.DB,
});

module.exports = connection;
