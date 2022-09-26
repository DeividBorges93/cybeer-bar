const JwtUtils = require('../utils/jwtUtils');

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  req.payload = JwtUtils.validateToken(authorization);
  next();
};

module.exports = validateToken;
