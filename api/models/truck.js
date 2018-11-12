'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const truck = sequelize.define('truck', {

      id: {
        type: DataTypes.INTEGER,
      },
          trucknumber: {
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
          },
          plate: {
              type: DataTypes.STRING
          }
        
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  truck.associate = function(models) {
 
 /*   driver.hasMany(models.order, {
      foreignKey: 'driverid'
    });
*/
  };
  console.log(truck);
  return truck;
};



  
  
    