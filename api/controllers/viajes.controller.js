'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var viajesService = require('../services/viajes.service');
var utils = require('../utils/writer.js');
////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Viajes Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Viaje not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Viaje deleted successfully';



'use strict';

var _ = require('lodash');
var shortid = require('shortid');


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

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getAllViajes(req, res) {

  try {
    
    // Receiving parameters
    /*var params = {
      operadores_email: req.swagger.params.operadores_email.value,
      operadores_loginmanual: req.swagger.params.operadores_loginmanual.value
    };*/

    // Call to service
/*
    viajesService.getAllViajes()
        .then(function (response) {
            console.log(response);
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
    });
  */ 
   
   order.findAll({
    /*include: [{
      model: orderstatus
     
    }]*/
     include: [{ all: true, nested: true }]
      })
   .then((consoles) => {
     console.log(consoles);
     res.status(200).send(consoles);
     //utils.writeJson(res, consoles);
   }, (error) => {
     res.status(500).send(error);
   });

  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getAllviajes.name, error, res);
  }
}


module.exports = {
  getAllViajes,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}