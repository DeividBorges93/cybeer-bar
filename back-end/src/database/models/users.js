const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'users'
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId' });
    User.hasMany(models.Sale, { foreignKey: 'sellerId' });
  }
  return User;
};



module.exports = UserModel;