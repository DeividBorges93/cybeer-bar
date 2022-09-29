const ProductModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url_image',
    },
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, { foreignKey: 'productId', as: 'products' })
  }

  return Products;
};

module.exports = ProductModel;
