'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var operadoresService = require('../services/operadores.service');
var utils = require('../utils/writer.js');
const { driver } = require('../models');	// Sequelize

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Operador Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Operador not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Operador deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////


function getOperadoresNfc(req, res) {

  try {
    // Receiving parameters
    var params = {
      operadores_nfc: req.swagger.params.operadores_nfc.value
    };

    // Call to service

    driver
    .findOne({ where: {nfc: params.operadores_nfc} })
    .then(mylicencia => {

      //console.log(mylicencia);

      if (!mylicencia) {
        res.status(200).send({
          message: 'Licencia Not Found'
        });
      }
      else
        res.status(200).send(mylicencia);
    })
    .catch(error => res.status(200).send(error));
   
   
  } catch (error) {
    console.log(error);
    controllerHelper.handleErrorResponse(MODULE_NAME, getOperadoresLogin.name, error, res);
  }
}

function getOperadoresLogin(req, res) {

  try {
    // Receiving parameters
    var params = {
      operadores_email: req.swagger.params.operadores_email.value,
      operadores_loginmanual: req.swagger.params.operadores_loginmanual.value
    };

    // Call to service

    driver
    .findOne({ where: {username: params.operadores_email, password : params.operadores_loginmanual } })
    .then(mylicencia => {

      //console.log(mylicencia);

      if (!mylicencia) {
        res.status(200).send({
          message: 'Licencia Not Found'
        });
      }
      else
        res.status(200).send(mylicencia);
    })
    .catch(error => res.status(200).send(error));
   
   
  } catch (error) {
    console.log(error);
    controllerHelper.handleErrorResponse(MODULE_NAME, getOperadoresLogin.name, error, res);
  }
}

function getOperadores(req, res) {

  try {
    // Receiving parameters
    var params = {
      name: req.swagger.params.name.value,
      sort: req.swagger.params.sort.value
    };

    // Call to service
    driver.findAll({
      /*include: [{
        model: orderstatus
       
      }]
       include: [{ all: true, nested: true }]
  */})
     .then((opers) => {
       console.log(opers);
       res.status(200).send(opers);
       //utils.writeJson(res, consoles);
     }, (error) => {
       res.status(500).send(error);
     });
  

/*
    operadoresService.getOperadores()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
    });
 */  
   
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getOperadores.name, error, res);
  }
}

function getOperadorById(req, res) {
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
  getOperadoresLogin,
  getOperadores,
  createOperador,
  getOperadorById,
  updateOperador,
  deleteOperador,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}