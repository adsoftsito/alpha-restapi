'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var licenciasService = require('../services/licencias.service');
var utils = require('../utils/writer.js');
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

    // Call to service

    licenciasService.getLoginLicencia(params)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
    });
   
   
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getLoginLicencia.name, error, res);
  }
}


module.exports = {
  getLoginLicencia,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}