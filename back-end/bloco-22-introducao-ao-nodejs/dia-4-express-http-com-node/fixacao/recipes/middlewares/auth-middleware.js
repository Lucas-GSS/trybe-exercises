const validUser = {
  username: 'Lucas',
  password: 'senhasegura',
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password cannot be blank' });
  }
  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  next();
};

module.exports = authMiddleware;