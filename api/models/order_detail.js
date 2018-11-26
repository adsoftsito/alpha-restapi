'use strict';
module.exports = (sequelize, DataTypes) => {
 
    const order_detail = sequelize.define('order_detail', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },

        companyid: {
          type: DataTypes.STRING
        },
        customerid: {
          type: DataTypes.STRING
        },
        orderid: {
            type: DataTypes.INTEGER
        },        
        orderdetailid: {
              type: DataTypes.INTEGER
            //  primaryKey: true

        },
        routedetailid: {
                    type: DataTypes.STRING
            },
        orderdetaildescription: {
                    type: DataTypes.STRING
            },
        orderdetailmessage: {
              type: DataTypes.STRING
        },
        orderdetailarrivedate: {
          type: DataTypes.STRING
        },
        orderdetailactivity: {
          type: DataTypes.STRING
        },
        orderdetailproductid: {
          type: DataTypes.STRING
        },
        orderdetailproductdescription: {
          type: DataTypes.STRING
        },
        orderdetailproductquantity: {
          type: DataTypes.STRING
        },
        orderdetailproductunitid: {
          type: DataTypes.STRING
        },
        orderdetailproductunitdescription: {
          type: DataTypes.STRING
        },
        orderdetailstatus: {
          type: DataTypes.STRING
        },
        
        signsnumber: {
          type: DataTypes.INTEGER
        },
        picturesnumber: {
          type: DataTypes.INTEGER
        },
        commentsnumber: {
          type: DataTypes.INTEGER
        },
        qrsnumber: {
          type: DataTypes.INTEGER
        },
        codebarsnumber : {
          type: DataTypes.INTEGER
        }
              
 }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });

  
  order_detail.associate = function(models) {
 
  };

  
  console.log(order_detail);
  return order_detail;
};



  
  
    