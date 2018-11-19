'use strict';
module.exports = (sequelize, DataTypes) => {
    /*
      character varying(20) NOT NULL,
   character varying(20) NOT NULL,
   character varying(20) NOT NULL,
   character varying(200) NOT NULL,
    character varying(300), 
       character varying(20), 
        numeric, 
        numeric,   
     numeric, 
    character varying(1000),
 
    */
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