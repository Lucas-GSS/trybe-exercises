const validateName = (firstName, lastName) => {
  if (!firstName || typeof(firstName) !== 'string') {
    throw new Error('O campo firstName é obrigatório e deve ser uma string')
  }
  else if (!lastName || typeof(lastName) !== 'string') {
    throw new Error('O campo lastName é obrigatório e deve ser uma string')
  } else  {
    return true;
  }
}

const validateEmail = (email) => {
  if (!email) {
    throw new Error('O campo email é obrigatório')
  } else {
    return true;
  }
}

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    throw new Error('O campo senha é obrigatório e deve ter pelo menos 6 caracteres')
  } else {
    return true
  }
}

function validateDatas(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (validateName(firstName, lastName) && validateEmail(email)
      && validatePassword(password)) return next();
  } catch(error) {
    return next(error)
  }
}

module.exports = validateDatas;
