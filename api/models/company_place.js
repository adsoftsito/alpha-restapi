'use strict';
module.exports = (sequelize, DataTypes) => {
   
  const company_place = sequelize.define('company_place', {
    placeid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    companyid: {
      type: DataTypes.STRING
    },
    placedescription: DataTypes.STRING,
    placeaddress: DataTypes.STRING,
    placemessage: DataTypes.STRING,
    placetype: DataTypes.STRING,
    placelat: DataTypes.NUMERIC,
    placelng: DataTypes.NUMERIC,
    placeradius: DataTypes.NUMERIC,
    nfctag: DataTypes.STRING,
    placepolygon: DataTypes.STRING
    


  },  {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  company_place.associate = function(models) {
    // associations can be defined here

    company_place.belongsTo(models.company_place_type, {
        foreignKey: 'placetype'
      });
  };
  return company_place;
};