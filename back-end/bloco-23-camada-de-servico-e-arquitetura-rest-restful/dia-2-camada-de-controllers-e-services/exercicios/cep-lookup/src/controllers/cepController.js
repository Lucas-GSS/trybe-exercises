const { getAddress } = require('../services/cepService');

const get = async (req, res) => {
  const { cep } = req.params;
  const address = await getAddress(cep);
  return res.status(200).json(address);
};

module.exports = get;