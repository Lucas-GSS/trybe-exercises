const { validate } = require('../services/cepService');

async function getAddress(req, res) {
  const { cep } = req.params;
  const {address , code, message} = await validate(cep);
  if (message) {
    return res.status(code).json({ message })
  }
  if(!address) return res.status(404).json({ message: 'CEP não encontrado' })
  return res.status(200).json({ message: address });
}

module.exports = { getAddress };

