const OrdersService = require('../services/orders.service');

class OrdersController {
  static async create(req, res) {
    const order = await OrdersService.createSale(req.body);
    res.status(201).json({ order });
  }

  static async orderDetail(req, res) {
    const { id } = req.params;

    const orderDetail = await OrdersService.orderDetail(id);
    res.status(200).json(orderDetail);
  }

  static async getByUserId(req, res) {
    const { id, role } = req.payload;
    const orders = await OrdersService.getByUserId(id, role);
    res.status(200).json(orders);
  }
}

module.exports = OrdersController;
