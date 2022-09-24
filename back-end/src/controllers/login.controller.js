const LoginService = require('../services/login.service');

class LoginController { 
  static async login(req, res) {
    const token = await LoginService.login(req.body);
    res.status(200).json({ token });
  }

  static async decryptToken(req, res) {    
    const data = await LoginService.decryptToken(req.body.token);
    delete data.iat;
    res.status(200).json({ ...data });
  }
}

module.exports = LoginController;
