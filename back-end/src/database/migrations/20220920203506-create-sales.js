'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  }
};