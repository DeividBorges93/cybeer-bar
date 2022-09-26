const OrdersService = require('../services/orders.service');

class OrdersController { 
  static async getByUserId(req, res) {
    const { id, role } = req.payload;
    const orders = await OrdersService.getByUserId(id, role);
    res.status(200).json(orders);
  }
}

module.exports = OrdersController;
