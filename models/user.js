'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    namaLengkap: DataTypes.STRING,
    email: DataTypes.STRING,
    levelUser: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    tableName: 'user_tabel',
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};