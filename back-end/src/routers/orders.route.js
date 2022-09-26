const { Router } = require('express');
const OrdersController = require('../controllers/orders.controller');

const router = Router();

router
  .get('/', OrdersController.getByUserId)
  .post('/', OrdersController.create(req, res));

module.exports = router;
