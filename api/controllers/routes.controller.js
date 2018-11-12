'use strict';

//var _ = require('lodash');
const _ = require('lodash');
const util = require('util');	// Required in swagger sample controller

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var operadoresService = require('../services/operadores.service');
var utils = require('../utils/writer');

const { route } = require('../models');	// Sequelize

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Drivers Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Driver not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Driver deleted successfully';


//'use strict';

//var _ = require('lodash');
var shortid = require('shortid');


//const Sequelize = require('sequelize');
//database wide options
/*
var opts = {
  define: {
      //prevent sequelize from pluralizing table names
      freezeTableName: true
  }
}
*/
//const sequelize = new 
//Sequelize('postgres://adsoft:5i5i5i5i@35.237.69.58:5432/alphadriver', opts);
//Sequelize('mysql://adsoft:5i5i5i5i@localhost:3306/er');

/*
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
  const Operadores = sequelize.define('driver', {
    drivercode: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    lastname: {
                  type: Sequelize.STRING
          },
    license: {
            type: Sequelize.STRING
    },
    licensetype: {
        type: Sequelize.STRING
    },
    licensedue: {
        type: Sequelize.STRING
    },
    companyid: {
                  type: Sequelize.STRING
          },
    nfctag: {
                  type: Sequelize.STRING
          },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  
  
  
    });
*/
////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////


function getRoutes(req, res) {

  try {
    // Receiving parameters
    /*
    var params = {
      name: req.swagger.params.name.value,
      sort: req.swagger.params.sort.value
    };
*/
    // Call to service
    console.log("in ...");
    console.log(route);
    
    route.findAll({
        /*include: [{
          model: orderstatus
         
        }]*/
         include: [{ all: true, nested: false }]
    })
       .then((opers) => {
         console.log(opers);
         res.status(200).send(opers);
         //utils.writeJson(res, consoles);
       }, (error) => {
         res.status(500).send(error);
       });
    
    
   
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getRoutes.name, error, res);
  }
}

function getTruckById(req, res) {
  console.log("operadores.controller getOperadorById");
  try {
    console.log(req.swagger.params.id.value);

    operadorService.getOperadorById(req.swagger.params.id.value)
      .then(function (response) {
        console.log("Good response: " + response);
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        console.log("Bad response: " + response);
        utils.writeJson(res, response);
      });
    console.log("Success");
  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, getOperadorById.name, error, res);
  }
}



function createOperador(req, res) {
  try {
    // Receiving parameters
    var params = req.body;
    operadorService.createOperador(params)
        .then(function (response) {
            console.log("Good response: " + response);
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
    });
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, createOperador.name, error, res);
  }
}


function deleteOperador(req, res) {

  try {
    // Receiving parameters
    var params = {
      id: req.swagger.params.id.value
    };

      // Call to service
    

    operadorService.deleteOperador(params.id)
      .then(function (response) {
          utils.writeJson(res, response);
      })
      .catch(function (response) {
          utils.writeJson(res, response);
  });

  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, deleteOperador.name, error, res);
  }
}

function updateOperador(req, res) {
  try {
    // Receiving parameters
    var params = req.body;
    params.id = req.swagger.params.id.value;
    console.log(params.id);
    operadorService.updateOperador(params)
      .then(function (response) {
          utils.writeJson(res, response);
      })
      .catch(function (response) {
          utils.writeJson(res, response);
      });
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, deleteOperador.name, error, res);
  }
}

module.exports = {
  getRoutes,
  getTruckById,
  updateOperador,
  deleteOperador,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}