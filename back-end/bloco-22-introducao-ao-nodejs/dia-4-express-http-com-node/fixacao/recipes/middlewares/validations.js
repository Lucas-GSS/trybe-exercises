const validateName =  (req, res, next) => {
  const { name } = req.body;
  if (name === '' || !name) return res.status(400).json({ message: 'Dados inválidos' });
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || price < 0 || typeof(price) !== 'number') {
    return res.status(400).json({ message: 'Preço inválido' })
  };
  next();
};

module.exports = { validateName, validatePrice };