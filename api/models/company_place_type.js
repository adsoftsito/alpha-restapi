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
  const company_place_type = sequelize.define('company_place_type', {
    placetypeid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    placetypedescription: {
      type: DataTypes.STRING
    },
   

  },  {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  company_place_type.associate = function(models) {
    // associations can be defined here
  };
  return company_place_type;
};