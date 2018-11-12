'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
    },
    companyid: {
      type: DataTypes.STRING,
      primaryKey : true
    },
    companyname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },  {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};