const { Router } = require('express');
const LoginController = require('../controllers/login.controller');

const router = Router();

router
  .post('/', (req, res) => LoginController.login(req, res))
  .post('/decrypt-token', (req, res) => LoginController.decryptToken(req, res));


module.exports = router;