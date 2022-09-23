require('dotenv/config');

const { sign, verify } = require('jsonwebtoken');
const CustomError = require('./CustomError');

class JwtUtils {
  static createToken(id, role) {
    return sign({ id, role }, process.env.JWT_SECRET || 'Secret');
  }

  static validateToken(token) {
    if (!token) throw new CustomError('UnauthorizedError', 'Token must be a valid token');
    try {
      const data = verify(token, process.env.JWT_SECRET || 'Secret');
      return data;
    } catch (error) {
      if (error) {
        throw new CustomError('UnauthorizedError', 'Token must be a valid token');
      }
    }
  }
}

module.exports = JwtUtils;
