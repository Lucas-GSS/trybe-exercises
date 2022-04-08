const connection  = require('./connection');

const getAddress = async (cep) => {
  const [address] = await connection.query('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return address;
};

module.exports = { getAddress };
