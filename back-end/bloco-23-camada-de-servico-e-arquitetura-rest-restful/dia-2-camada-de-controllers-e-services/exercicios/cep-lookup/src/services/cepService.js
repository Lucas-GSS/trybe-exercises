const { getAddress } = require("../models/cepModel");

const CEP_REGEX = /\d{5}-?\d{3}/;
const validFormat = (cep) => CEP_REGEX.test(cep);

const blank = (cep) => !cep ;

async function validate(cep) {
  if (blank(cep)) return { code: 404, message: 'O CEP não pode ser vazio' }
  if (!validFormat(cep)) return { code: 404, message: 'CEP inválido' }
  const address = await getAddress(cep);
  return address;
}

module.exports = { validate }