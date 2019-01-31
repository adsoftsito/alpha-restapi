'use strict';

//var _ = require('lodash');
const _ = require('lodash');
const util = require('util');	// Required in swagger sample controller

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
//var operadoresService = require('../services/operadores.service');
var utils = require('../utils/writer');

const { company_place } = require('../models');	// Sequelize

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Places Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Place not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Place deleted successfully';


//'use strict';

//var _ = require('lodash');
var shortid = require('shortid');


////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////
function getPlaceNfc(req, res) {

  try {
    // Receiving parameters
    var params = {
      places_nfc: req.swagger.params.places_nfc.value
    };

    // Call to service

    company_place
    .findOne({ where: {nfctag: params.places_nfc} })
    .then(myplace => {

      //console.log(mylicencia);

      if (!myplace) {
        res.status(200).send({
          message: 'Nfc place Not Found'
        });
      }
      else
        res.status(200).send(myplace);
    })
    .catch(error => res.status(200).send(error));
   
   
  } catch (error) {
    console.log(error);
    controllerHelper.handleErrorResponse(MODULE_NAME, getPlaceNfc.name, error, res);
  }
}

function getPlaces(req, res) {

  try {
    
    // Call to service
    console.log("in ...");
    console.log(company_place);
    
    company_place.findAll({
        /*include: [{
          model: orderstatus
         
        }]
         include: [{ all: true, nested: true }]
    */})
       .then((places) => {
         console.log(places);
         res.status(200).send(places);
         //utils.writeJson(res, consoles);
       }, (error) => {
         res.status(500).send(error);
       });
    
    
   
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getPlaces.name, error, res);
  }
}

module.exports = {
  getPlaceNfc,
  getPlaces,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}