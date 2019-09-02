'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wilayah = sequelize.define('Wilayah', {
    id_wilayah: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    kode_pos: DataTypes.INTEGER,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    type: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    _3lc: {
        type: DataTypes.STRING,
        field: '3lc'
    }
  }, {
    tableName: 'wilayah',
    timestamps: false
  });
  Wilayah.associate = function(models) {
    // associations can be defined here
  };
  return Wilayah;
};