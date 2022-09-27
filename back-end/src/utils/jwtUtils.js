require('dotenv/config');
const { sign, verify } = require('jsonwebtoken');
const jwtKey = require('fs')
.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });
const CustomError = require('./CustomError');

class JwtUtils {
  static createToken({ id, name, email, role }) {
    return sign({ id, name, email, role }, jwtKey);
  }

  static validateToken(token) {
    if (!token) throw new CustomError('UnauthorizedError', 'Token must be a valid token');
    try {
      const data = verify(token, jwtKey);
      return data;
    } catch (error) {
      if (error) {
        throw new CustomError('UnauthorizedError', 'Token must be a valid token');
      }
    }
  }
}

module.exports = JwtUtils;
