'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const order = sequelize.define('order', {
        orderid: {
            type: DataTypes.INTEGER
        },
        description: {
              type: DataTypes.STRING
        },
        origin: {
                    type: DataTypes.STRING
            },
        target: {
                    type: DataTypes.STRING
            },
      orderstatusid: {
              type: DataTypes.INTEGER
      }
              
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 /*
  order.belongsTo(orderstatus, {
    foreignKey: 'orderstatusid',
    constraints: false,
    as: 'orderstatus'
  });*/
  order.associate = function(models) {
    order.belongsTo(models.orderstatus, {
      foreignKey: 'orderstatusid',
      onDelete: 'CASCADE'
    });
  };

  /*Console.associate = function(models) {
    Console.hasMany(models.Game, {
      foreignKey: 'consoleId',
      as: 'games'
    });
  };*/
  console.log(order);
  return order;
};



  
  
    