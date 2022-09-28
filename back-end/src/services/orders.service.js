const setFilterByRole = require('../utils/setFilterByRole');
const dbModel = require('../database/models');

class OrdersService {
  static async createSale({ salesProduct, ...orderInfo }) {
    const order = await dbModel.Sale.create({ ...orderInfo });
    const productsOrder = await OrdersService.createSalesProduct(salesProduct, order.id);

    return { ...order.dataValues, productsOrder };
  }

  static async createSalesProduct(salesProduct, saleId) {
    console.log(salesProduct);
    const productsOrder = await Promise.all(salesProduct.map((product) => (
      dbModel.SalesProducts.create({
        saleId,
        productId: product.productId,
        quantity: product.quantity,
      })
    )));

    return productsOrder;
  }

  static async getByUserId(id, role) {
    const filter = setFilterByRole(id, role);
    const orders = await dbModel.Sale.findAll({ where: filter });
    return orders;
  }

  static async getDetails(id) {
    const orderDetails = await dbModel.Sale.findOne({
      where: { id },
      include: [{ model: dbModel.SalesProducts, where: { saleId: id }, as: 'salesProducts' },
      { model: dbModel.User, as: 'sellers', attributes: ["name"] }],
    });

    return orderDetails;
  }
}

module.exports = OrdersService;
