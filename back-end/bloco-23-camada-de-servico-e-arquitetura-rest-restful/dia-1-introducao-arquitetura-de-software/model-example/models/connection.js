const msql = require('mysql2/promise'); // acessa o mysql2 com suporte a promises

// npm i mysql2 -> driver que permite se comunicar com um BD. Driver é um software q permite uma app comunicar com BD
// connection serve para criar uma conexão com BD
// createPool() serve para reaproveitar conexões com o mysql. Isso da mais performance,
// pois descarta a necessidade de criar novas conexões
// recebe um objeto com as informações da conexão a ser usada

const connection = msql.createPool({
  user: 'lucas',
  password: 'Lucas@trybe1',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
