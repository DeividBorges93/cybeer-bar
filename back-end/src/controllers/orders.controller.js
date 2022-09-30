const OrdersService = require('../services/orders.service');
const verifyPermission = require('../utils/verifyPermission');

class OrdersController {
  static async create(req, res) {
    const order = await OrdersService.createSale(req.body);
    res.status(201).json({ order });
  }

  static async getByUserId(req, res) {
    const { id, role } = req.payload;
    const orders = await OrdersService.getByUserId(id, role);
    res.status(200).json(orders);
  }

  static async getDetails(req, res) {
    const { id } = req.params;
    const orderDetails = await OrdersService.getDetails(id);
    const { userId, sellerId } = orderDetails;
    const tokenId = req.payload.id;
    verifyPermission([userId, sellerId], tokenId);
    res.status(200).json(orderDetails);
  }
}

module.exports = OrdersController;
