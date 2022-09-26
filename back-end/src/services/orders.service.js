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
}

module.exports = OrdersService;
