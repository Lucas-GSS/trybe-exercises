const mysql = require('mysql2/promise');

const conncetion = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DB,
});

module.exports = conncetion;