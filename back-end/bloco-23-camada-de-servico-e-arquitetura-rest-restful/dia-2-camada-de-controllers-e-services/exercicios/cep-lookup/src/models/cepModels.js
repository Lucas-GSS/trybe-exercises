const connection = require('./connection');

const getAdressByCep = async (cep) => {
  const sqlQuery = 'Select * FROM cep_lookup.ceps WHERE cep = ?';
  const [[address]] = await connection.query(sqlQuery, [cep]);
  return address;
};

module.exports = { getAdressByCep };