const ProductsService = require('../services/products.service');

class ProductsController { 
  static async getAll(_req, res) {
    const products = await ProductsService.getAll();
    res.status(200).json({ products });
  }
}

module.exports = ProductsController;
