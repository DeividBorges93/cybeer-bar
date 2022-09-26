const dbModel = require('../database/models');

class OrdersService {
  static async createSale({ salesProduct, ...orderInfo }) {
    const order = await dbModel.Sale.create({
      totalPrice: orderInfo.totalPrice,
      deliveryAddress: orderInfo.deliveryAddress,
      deliveryNumber: orderInfo.deliveryNumber,
      saleDate: orderInfo.saleDate,
      status: orderInfo.status,
    });
    console.log(order);
    await OrdersService.createSalesProduct(salesProduct, order.id);
    return order;
  }

  static async createSalesProduct(salesProduct, saleId) {
    const ordersPromises = salesProduct.map((product) => (
      dbModel.SalesProducts.create({
        saleId,
        productId: product.id,
        quantity: product.quantity,
      })
    ));
    await Promise.all(ordersPromises);
  }
}

module.exports = OrdersService;

//  {
//   salesProduct: [
//     {productId, quantity},
//   ],
//   userId,
//   sellerId,
//   deliveryAddress,
//   deliveryNumber,
//   status,
//   saleDate,
// }
