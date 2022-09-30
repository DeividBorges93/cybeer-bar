const { Router } = require('express');
const LoginController = require('../controllers/login.controller');
const validateToken = require('../middlewares/validateToken.middleware');

const router = Router();

router
  .post('/admin', validateToken, (req, res) => LoginController.register(req, res))
  .post('/register', (req, res) => LoginController.register(req, res))
  .post('/login', (req, res) => LoginController.login(req, res))
  .get('/sellers', (req, res) => LoginController.getSellers(req, res))
  .get('/', (req, res) => LoginController.getUsers(req, res))
  .post('/decrypt-token', (req, res) => LoginController.decryptToken(req, res));

module.exports = router;
