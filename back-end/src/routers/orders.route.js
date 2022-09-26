const { Router } = require('express');
const OrderController = require('../controllers/orders.controller');

const router = Router();

router
  .get('/', OrderController.getByUserId);

module.exports = router;
