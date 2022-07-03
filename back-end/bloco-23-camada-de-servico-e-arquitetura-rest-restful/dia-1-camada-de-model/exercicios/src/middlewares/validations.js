 const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName) return res.status(400).json({ message: '"firstName" is required' });
  if (!lastName) return res.status(400).json({ message: '"lastName" is required' });
  next();
 };

 const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  next();
 }

 const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6) return res.status(400).json({ message: '"password" must be at lesat 6 characters long' });
  next();
 }

module.exports = { validateName, validateEmail, validatePassword };
