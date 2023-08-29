'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  companies.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      company_name: DataTypes.STRING,
      img_location: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'companies', 
      schema: 'brands', 
      tableName: 'companies',
      underscored: true, 
      updatedAt: 'updated_at', 
      createdAt: 'created_at',
    }
  );
  return companies;
};
