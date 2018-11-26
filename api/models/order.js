'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const order = sequelize.define('order', {
        companyid: {
          type: DataTypes.STRING
        },
        customerid: {
          type: DataTypes.STRING
        },
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
/*  zone character varying(20)  NULL,
  assigndate date NOT NULL DEFAULT ('now'::text)::date,
  teadate date NOT NULL DEFAULT ('now'::text)::date,
  enddate date NOT NULL DEFAULT ('now'::text)::date,
  teastatus varying(20) not null, */
        zone: {
          type: DataTypes.STRING
        },
        assigndate: {
          type: DataTypes.STRING
        },
        teadate: {
          type: DataTypes.STRING
        },
        enddate: {
          type: DataTypes.STRING
        },
        teastatus: {
          type: DataTypes.STRING
        },

        source: {
          type: DataTypes.STRING
        },
        sourceaddr: {
          type: DataTypes.STRING
        },
        target: {
          type: DataTypes.STRING
        },
        targetaddr: {
          type: DataTypes.STRING
        },
        km: {
          type: DataTypes.NUMERIC
        },
        lt: {
          type: DataTypes.NUMERIC
        },
        km_lt: {
          type: DataTypes.NUMERIC
        },
        price_lt: {
          type: DataTypes.NUMERIC
        },
        cost: {
          type: DataTypes.NUMERIC
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
  
  order.associate = function(models) {

  /*  
    order.belongsTo(models.driver, {
      foreignKey: 'driverid',
       
      onDelete: 'CASCADE'
    });

    order.belongsTo(models.truck, {
      foreignKey: 'truckid',
       
      onDelete: 'CASCADE'
    });

    order.belongsTo(models.trailer, {
      foreignKey: 'trailerid1',
       
      as: 'remolque1'
    });

    order.belongsTo(models.dolly, {
      foreignKey: 'dollyid',
       
      as: 'dolly'
    });

    order.belongsTo(models.trailer, {
      foreignKey: 'trailerid2',
       
      as: 'remolque2'
    });
*/
    /*
    order.belongsTo(models.order_detail, {
      foreignKey: 'id',
      as: 'order_detail'
    });
*/
/*
    order.belongsTo(models.orderstatusadmin, {
      foreignKey: 'orderadminid',
      as: 'orderstatusadmin'
    });


    order.belongsTo(models.orderstatus, {
      foreignKey: 'orderstatusid',
      as: 'orderstatus'
    });
*/

    order.hasMany(models.order_detail, {
      foreignKey: 'orderid',
      as: 'orderdetail'
    });

  };

  
  console.log(order);
  return order;
};



  
  
    