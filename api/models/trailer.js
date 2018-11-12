'use strict';
module.exports = (sequelize, DataTypes) => {
 
    /*
      trailernumber character varying(50), 
  trailertype   character varying(50), 
  brand    character varying(40), 
  model character varying(40), 
  year  character varying(4),
  plate character varying(20),

    */
    const trailer = sequelize.define('trailer', {
      id: {
        type: DataTypes.INTEGER,
      },

          trailernumber: {
            type: DataTypes.STRING,
            primaryKey: true

          },

          trailertype: {
            type: DataTypes.STRING
          },

          brand: {
            type: DataTypes.STRING
          },
          model: {
                        type: DataTypes.STRING
                },
          year: {
                  type: DataTypes.STRING
          },
          plate: {
              type: DataTypes.STRING
          }
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  trailer.associate = function(models) {
 
 /*   driver.hasMany(models.order, {
      foreignKey: 'driverid'
    });
*/
  };
  console.log(trailer);
  return trailer;
};



  
  
    