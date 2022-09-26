const dbModel = require('../database/models');

class OrdersService {
  static async getByUserId(userId) {
    const orders = await dbModel.sales.findAll({ where: { userId } });
    return orders;
  }
}

module.exports = OrdersService;
