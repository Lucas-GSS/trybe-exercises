const msql = require('mysql2/promise');

const connection = msql.createPool({
  user: 'lucas',
  password: 'Lucas@trybe1',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;