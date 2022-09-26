const dbModel = require('../database/models');

class ProductsService {
  static async getAll() {
    const products = await dbModel.Product.findAll();
    return products;
  }
}

module.exports = ProductsService;
