const { Router } = require('express');
const OrdersController = require('../controllers/orders.controller');

const router = Router();

router
  .get('/', OrdersController.getByUserId)
  .post('/', OrdersController.create)
  .get('/:id', OrdersController.getDetails);

module.exports = router;
