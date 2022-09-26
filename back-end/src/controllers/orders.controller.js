const OrdersService = require('../services/orders.service');

class OrdersController { 
  static async create(req, res) {
    const order = await OrdersService.createSale(req.body);
    res.status(200).json({ order });
  }
}

module.exports = OrdersController;