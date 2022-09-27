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
}
 
module.exports = OrdersService;
