const LoginService = require('../services/login.service');

class LoginController { 
  static async login(req, res) {
    const user = await LoginService.login(req.body);
    res.status(200).json(user);
  }

  static async register(req, res) {
    const user = await LoginService.register(req.body);
    res.status(201).json({ user });
  }

  static async getSellers(req, res) {
    const sellers = await LoginService.getSellers();
    res.status(200).json({ sellers });
  }

  static async decryptToken(req, res) {    
    const data = await LoginService.decryptToken(req.body.token);
    delete data.iat;
    res.status(200).json({ ...data });
  }
}

module.exports = LoginController;
