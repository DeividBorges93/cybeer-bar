const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  salesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product,
      { 
        as: 'sales',
        foreignKey: 'saleId',
        otherKey: 'productId',
        through: salesProducts
    }),
    models.Product.belongsToMany(models.Sale,
      { 
        as: 'products',
        foreignKey: 'productId',
        otherKey: 'saleId',
        through: salesProducts
    })
  }

  return salesProducts;
};

module.exports = SalesProducts;