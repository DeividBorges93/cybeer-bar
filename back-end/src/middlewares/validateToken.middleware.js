const JwtUtils = require('../utils/jwtUtils');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  req.payload = JwtUtils.validateToken(authorization);
  res.status(200).json({ data: req.payload });
  next();
};

module.exports = validateToken;
