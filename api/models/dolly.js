'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const dolly = sequelize.define('dolly', {

      id: {
        type: DataTypes.INTEGER,
      },
          dollynumber: {
            type: DataTypes.STRING,
            primaryKey: true

          },

          brand: {
            type: DataTypes.STRING
          },
          model: {
                        type: DataTypes.STRING
                },
          year: {
                  type: DataTypes.STRING
          }
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  dolly.associate = function(models) {
 
 /*   driver.hasMany(models.order, {
      foreignKey: 'driverid'
    });
*/
  };
  console.log(dolly);
  return dolly;
};



  
  
    