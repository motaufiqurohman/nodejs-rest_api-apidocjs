'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Agen', {
    id_agent: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama_agent: DataTypes.STRING,
    alamat_agent: DataTypes.TEXT,
    jam_operasional: DataTypes.TIME,
    no_telepon: DataTypes.STRING,
    foto_1: DataTypes.STRING,
    foto_2: DataTypes.STRING,
    foto_3: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    status: DataTypes.STRING,
    _3lc: {
        type: DataTypes.STRING,
        field: '3lc'
    },
    rate: DataTypes.INTEGER
  }, {
    tableName: 'tabel_agen',
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};