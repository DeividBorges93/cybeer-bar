const { Router } = require('express');
const ProductsController = require('../controllers/products.controller');

const router = Router();

router
  .get('/', (req, res) => ProductsController.getAll(req, res))


module.exports = router;