const setFilterByRole = require('../utils/setFilterByRole');
const dbModel = require('../database/models');

class OrdersService {
  static async createSale({ salesProduct, ...orderInfo }) {
    const order = await dbModel.Sale.create({ ...orderInfo });
    await OrdersService.createSalesProduct(salesProduct, order.id);
    return order;
  }

  static async createSalesProduct(salesProduct, saleId) {
    console.log(salesProduct);
    await Promise.all(salesProduct.map((product) => (
      dbModel.SalesProducts.create({
        saleId,
        productId: product.productId,
        quantity: product.quantity,
      })
    )));
  }

  static async getByUserId(id, role) {
    const filter = setFilterByRole(id, role);
    const orders = await dbModel.Sale.findAll({ where: filter });
    return orders;
  }
}

module.exports = OrdersService;
