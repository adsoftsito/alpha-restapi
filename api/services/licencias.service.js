'use strict';

var _ = require('lodash');
var messageHelper = require('../helpers/message.helper');
var licenciasRepository = require('../repositories/licencias.repository');
const soapRequest = require('easy-soap-request');
const fs = require('fs');



////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Error Messages
//const GS_SVC_ERR_CREATE_GS_ALREADY_EXISTS_WITH_SAME_NAME = 'Not possible to create gamesystem. There is a gamesystem with the same name in the system';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getLoginLicencia(params) {
  console.log(params);
  return licenciasRepository.getLoginLicencia(params);
}

module.exports = {
    getLoginLicencia
   }