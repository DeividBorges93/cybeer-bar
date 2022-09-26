const { Router } = require('express');
const OrdersController = require('../controllers/orders.controller');

const router = Router();

router
  .post('/', (req, res) => OrdersController.create(req, res));

module.exports = router;