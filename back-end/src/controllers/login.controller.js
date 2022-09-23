const LoginService = require('../services/login.service');

class LoginController { 
  static async login(req, res) {
    const token = await LoginService.login(req.body);
    res.status(200).json({ token });
  }
}

module.exports = LoginController;
