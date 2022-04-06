const pingMiddleware = (_req, res, _next) => res.status(200).json({ message: 'pong!' });

module.exports = pingMiddleware;