'use strict';

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
function getOrderbyId(req, res) {
  //console.log("operadores.controller getOperadorById");
  try {

    console.log(req.swagger.params.id.value);
    var id = req.swagger.params.id.value;
   
    console.log("viajes by id...");
    console.log(order);

   order.findById(id,
      { 
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


function addViaje(req, res) {
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
          companyid: 'hesa',
          customerid: 'ING-01',
          orderid: myorder.orderid,
          driverid: 'op-01',
          truckid: 'TR-890',
          trailerid1: 'R-01',
          dollyid: 'D-01',
          trailerid2: 'R-02',
          zone: "Zona Centro",
          assigndate: "2018-12-28 07:06:17",
          teadate: "2018-12-28T07:06:17.11",
          enddate: "2018-12-28T07:06:17.11",
          teastatus: "A tiempo",
          source: "x",
          sourceaddr: "xxx",
          target: "yyy",
          targetaddr: "999",
          km: "10",
          lt: "9",
          km_lt: "8",
          price_lt: "7",
          cost: "6",
          routeid: "r01",
          orderadminid: 4,
          orderstatusid: 1,
          orderdetail : myorderdetails

        }, {
          include: [{
            model: order_detail,
            as: 'orderdetail'
          }]
        })
        .then((myorder) => res.status(201).send(myorder))
        .catch((error) => res.status(400).send(error));
    


/*  return order
    .create({
      order: req.body.order,
      orderdetails: req.body.orderdetails,
    }, {
      include: [{
        model: order_detail,
        as: 'orderdetails'
      }]
    })
    .then((myorder) => res.status(201).send(myorder))
    .catch((error) => res.status(400).send(error));
*/
  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, addViaje.name, error, res);
  }
}

module.exports = {
  getOrders,
  getOrderbyId,
  getOrderDetailbyId,
  addViaje,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}