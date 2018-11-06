'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const orderstatusadmin = sequelize.define('orderstatusadmin', {
        orderstatusadminid: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING
        }
     
        
    }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 
  
  /*Console.associate = function(models) {
    Console.hasMany(models.Game, {
      foreignKey: 'consoleId',
      as: 'games'
    });
  };*/
  console.log(orderstatusadmin);
  return orderstatusadmin;
};



  
  
    