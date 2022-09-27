const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id',
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

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product,
      { 
        as: 'sales',
        foreignKey: 'saleId',
        otherKey: 'productId',
        through: SalesProducts
    }),
    models.Product.belongsToMany(models.Sale,
      { 
        as: 'products',
        foreignKey: 'productId',
        otherKey: 'saleId',
        through: SalesProducts
    })
  }

  return SalesProducts;
};

module.exports = SalesProducts;