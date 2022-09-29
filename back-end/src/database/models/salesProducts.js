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
    tableName: 'sales_products',
    underscored: true,
    freezeTableName: true,
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product,
      { 
        foreignKey: 'saleId',
        otherKey: 'productId',
        through: SalesProducts
    }),
    models.Product.belongsToMany(models.Sale,
      { 
        foreignKey: 'productId',
        otherKey: 'saleId',
        through: SalesProducts
    })
  }

  return SalesProducts;
};

module.exports = SalesProducts;