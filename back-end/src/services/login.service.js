const md5 = require('md5');
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

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      token,
    };
  }

  static async register({ name, email, password, role }) {
    const existUserEmail = await dbModel.User.findOne({ where: { email } });
    const existUserName = await dbModel.User.findOne({ where: { name } });
    
    if (existUserEmail || existUserName) {
      throw new CustomError('Conflict', 'User already registered');
    }

    const user = await dbModel.User.create({
      name,
      email,
      password: md5(password),
      role,
    });  
    return user;    
  }

  static async getSellers() {
    const sellers = await dbModel.User.findAll({ where: { role: 'seller' } });
    return sellers;
  }

  static async getUsers() {
    const users = await dbModel.User.findAll();
    return users;
  }

  static async decryptToken(token) {
    const data = JwtUtils.validateToken(token);
    return data;
  }
}

module.exports = LoginService;
