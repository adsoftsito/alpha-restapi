'use strict';

var PubNub = require('pubnub')
var pubnub = new PubNub({
    subscribeKey: "sub-c-6b07c230-8558-11e8-9083-323d8442fcf0",
    publishKey: "pub-c-af5bb6a9-28ee-4111-b657-044aa57f469f",
    secretKey: "sec-c-M2I2ZDYwMTktOWQwNy00ZDg0LWFjYmQtMzhiZmIxNDQxYjIy",
    ssl: true
})

const _ = require('lodash');
const util = require('util');	// Required in swagger sample controller
var shortid = require('shortid');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var viajesService = require('../services/viajes.service');
var utils = require('../utils/writer.js');

const { order } = require('../models');	// Sequelize
const { order_detail } = require('../models');	// Sequelize

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Viajes Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Viaje not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Viaje deleted successfully';

/*
const Sequelize = require('sequelize');
//database wide options
var opts = {
  define: {
      //prevent sequelize from pluralizing table names
      freezeTableName: true
  }
}

const sequelize = new 
Sequelize('postgres://adsoft:5i5i5i5i@35.237.69.58:5432/alphadriver', opts  );
//Sequelize('mysql://adsoft:5i5i5i5i@localhost:3306/er');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

*/
/*
  const order = sequelize.define('order', {
	orderid: {
	    type: Sequelize.INTEGER
	},
	description: {
		  type: Sequelize.STRING
	},
	origin: {
                type: Sequelize.STRING
        },
	target: {
                type: Sequelize.STRING
        },
  orderstatusid: {
          type: Sequelize.INTEGER
  }
  });
*/
/*
  const orderstatus = sequelize.define('orderstatus', {
    orderstatusid: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }
    });
    
    order.belongsTo(orderstatus, {
      foreignKey: 'orderstatusid',
      constraints: false,
      as: 'orderstatus'
    });
*/
////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////
function getOrdersbyOper(req, res) {
  //console.log("operadores.controller getOperadorById");
  try {

    console.log(req.swagger.params.driverid.value);
    var driverid = req.swagger.params.driverid.value;
   
    console.log("viajes by oper...");
    console.log(order);

    order.findAll(
      {
      where: {
        driverid: driverid,
        orderadminid : [1,2]
      },
      //include: [{ all: true, nested: true }]
      }
    ).then(orders => {
    console.log(orders);
    res.status(200).send(orders);
   })

  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, getOrdersbyOper.name, error, res);
  }
}


function getOrderbyId(req, res) {
  //console.log("operadores.controller getOperadorById");
  try {

    console.log(req.swagger.params.id.value);
    var id = req.swagger.params.id.value;
   
    console.log("viajes by id...");
    console.log(order);

    order.findOne(
      {
      where: {
        orderid: id
      },
      include: [{ all: true, nested: true }]
      }
    ).then(orders => {
    console.log(orders);
    res.status(200).send(orders);
   })

  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, getOrderbyId.name, error, res);
  }
}

function getOrders(req, res) {

  try {
        
   console.log("viajes...");
   console.log(order);
   order.findAll({
    /*include: [{
      model: orderstatus
     
    }]*/

    include: [{ all: true, nested: true }]
      })
   .then((consoles) => {
     //console.log(consoles);
     res.status(200).send(consoles);
     //utils.writeJson(res, consoles);
   }, (error) => {
     res.status(500).send(error);
   });

  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getOrders.name, error, res);
  }
}

function getOrderDetailbyId(req, res) {
  //console.log("operadores.controller getOperadorById");
  try {

    console.log(req.swagger.params.id.value);
    var id = req.swagger.params.id.value;
   
    console.log("order detail by id...");
    console.log(order_detail);

    order_detail.findAll(
      {
      where: {
        orderid: id
      },
      include: [{ all: true, nested: true }]
      }
    ).then(orders => {
    console.log(orders);
    res.status(200).send(orders);
   })

  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, getOrderDetailbyId.name, error, res);
  }
}


function updateViaje(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //console.log("operadores.controller getOperadorById");
  try {

    console.log("params : ");
    var myorderid = req.body.orderid;
    var mystatusadmin = req.body.orderadminid;
    var mystatusoper  = req.body.orderstatusid;

    order
    .findOne({ where: {orderid: myorderid} })
      .then(myoper => {
        console.log("Result of findById: " + myoper);
        if (!myoper) {
          res.status(401).send(({}));
        
        }
        return myoper
          .update({ 
            orderadminid: mystatusadmin, 
            orderstatusid: mystatusoper 
           })
          .then(() => res.status(200).send(myoper) )
          .catch(error => res.status(403).send(error));
        })
      .catch(error => {
          console.log("There was an error: " + error);
          resolve(error);
    });

  } catch (error) {
      console.log("Was an error");
      controllerHelper.handleErrorResponse(MODULE_NAME, updateStatusAdmin.name, error, res);
  }

}

function addViaje(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //console.log("operadores.controller getOperadorById");
  try {

    console.log("params : ");
    var myorder = req.body.order;
    var myorderdetails = req.body.orderdetail;

    console.log("order ... ");

    console.log(myorder);
    console.log("details ... ");
   
    console.log(myorderdetails);
  
    
    var mycompanyid = 'hesa';//req.swagger.params.myorder.orderid.value;
   
    console.log("create order...");
    console.log(myorder.orderid);
    console.log("create order...");

      return order
        .create({
          companyid: myorder.companyid,
          customerid: myorder.customerid,
          orderid: myorder.orderid,
          driverid: myorder.driverid,
          truckid: myorder.truckid,
          trailerid1: myorder.trailerid1,
          dollyid: myorder.dollyid,
          trailerid2: myorder.trailerid2,
          zone: myorder.zone,
          assigndate: myorder.assigndate,
          teadate: myorder.teadate,
          enddate: myorder.enddate,
          teastatus: myorder.teastatus,
          source: myorder.source,
          sourceaddr: myorder.sourceaddr,
          target: myorder.target,
          targetaddr: myorder.targetaddr,
          km: myorder.km,
          lt: myorder.lt,
          km_lt: myorder.km_lt,
          price_lt: myorder.price_lt,
          cost: myorder.cost,
          routeid: myorder.routeid,
          orderadminid: myorder.orderadminid,
          orderstatusid: myorder.orderstatusid,
          orderdetail : myorderdetails

        }, {
          include: [{
            model: order_detail,
            as: 'orderdetail'
          }]
        })
        .then((myorder) => {
          res.status(201).send(myorder);

          pubnub.publish(
            {
                message: { 
                  
                    codigo: myorder.orderid,                                                   
                    origen: myorder.source, 
                    destino : myorder.target,
                    origendir : myorder.sourceaddr, 
                    destinodir : myorder.targetaddr
      
      
              },
                //channel: 'alphadriver.plataforma' + idcliente + idusuario,
                channel: 'hello_world',                
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: { 
                    "cool": "meta"
                }   // publish extra meta with the request
            }, 
            function (status, response) {
                if (status.error) {
                    // handle error
                    console.log(status)
                } else {
                    console.log("message Published w/ timetoken", response.timetoken)
                }
            }
           );
       
      
          
        }
        )
        .catch((error) => res.status(400).send(error));
    

  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, addViaje.name, error, res);
  }
}

module.exports = {
  getOrders,
  getOrdersbyOper,
  getOrderbyId,
  getOrderDetailbyId,
  addViaje,
  updateViaje,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}