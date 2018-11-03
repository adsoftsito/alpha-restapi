'use strict';

const _ = require('lodash');
const util = require('util');	// Required in swagger sample controller
var shortid = require('shortid');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var licenciasService = require('../services/licencias.service');
var utils = require('../utils/writer.js');

const { company } = require('../models');	// Sequelize

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Licencias Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Licencia not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Licencia deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getLoginLicencia(req, res) {

  try {
    // Receiving parameters
    var params = {
      licencia_usuario: req.swagger.params.licencia_usuario.value,
      licencia_password: req.swagger.params.licencia_password.value
    };

    console.log('login cliente...');
    console.log(company);
    // Call to service
    company
    .findOne({ where: {username: params.licencia_usuario, password : params.licencia_password } })
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
    controllerHelper.handleErrorResponse(MODULE_NAME, getLoginLicencia.name, error, res);
  }
}


module.exports = {
  getLoginLicencia,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}