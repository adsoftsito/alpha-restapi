'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const order = sequelize.define('order', {
        orderid: {
            type: DataTypes.INTEGER
        },
        driverid: {
              type: DataTypes.STRING
        },
        truckid: {
                    type: DataTypes.STRING
            },
        trailerid1: {
                    type: DataTypes.STRING
            },
        dollyid: {
              type: DataTypes.STRING
        },
        trailerid2: {
          type: DataTypes.STRING
        },
        routeid: {
          type: DataTypes.STRING
        }, 
        orderadminid: {
          type: DataTypes.STRING
        },
        orderstatusid: {
              type: DataTypes.INTEGER
        }
              
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
 /*

  orderid integer NOT NULL,
  driverid character varying(20) NOT NULL,
  truckid character varying(20) NOT NULL,
  trailerid1 character varying(20) NOT NULL,
  dollyid    character varying(20)  NULL,
  trailerid2 character varying(20)  NULL,
  routeid character varying(20) NOT NULL,
  orderadminid integer not null,  
  orderstatusid integer not null,
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
    
    order.belongsTo(models.driver, {
      foreignKey: 'driverid',
       
      onDelete: 'CASCADE'
    });

    order.belongsTo(models.truck, {
      foreignKey: 'truckid',
       
      onDelete: 'CASCADE'
    });
  };

  
  console.log(order);
  return order;
};



  
  
    