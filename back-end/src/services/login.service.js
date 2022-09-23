const CustomError = require('../utils/CustomError');
const JwtUtils = require('../utils/jwtUtils');
const passwordCompare = require('../utils/passwordCompare');
const dbModel = require('../database/models');

class LoginService {
  static async login({ email, password }) {
    const user = await dbModel.User.findOne({ where: { email } });

    if (!user || !passwordCompare(password, user.password)) {
      throw new CustomError('NotFoundError', 'User not found');
    }

    const token = JwtUtils.createToken(user);

    return token;
  }
}

module.exports = LoginService;
