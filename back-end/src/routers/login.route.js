const { Router } = require('express');
const LoginController = require('../controllers/login.controller');

const router = Router();

router.post('/', (req, res) => LoginController.login(req, res));

module.exports = router;