'use strict';

var _ = require('lodash');
var shortid = require('shortid');


const Sequelize = require('sequelize');

const sequelize = new 
Sequelize('postgres://adsoft:5i5i5i5i@35.237.69.58:5432/alphadriver');
//Sequelize('mysql://adsoft:5i5i5i5i@localhost:3306/er');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



const Licencias = sequelize.define('licencias', {
	id_cliente: {
	  type: Sequelize.STRING
	},
	usuario: {
		type: Sequelize.STRING
	},
	password: {
                type: Sequelize.STRING
        }


  });


////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function getLoginLicencia(params) {
  console.log(params);
  
  return new Promise(function(resolve, reject) {
   
    Licencias
    .findOne({ where: {usuario: params.licencia_usuario, password : params.licencia_password } })
    .then(mylicencia => {
      if (!mylicencia) {
        resolve({
          message: 'Licencia Not Found',
        });
      }
      resolve(mylicencia);
    })
    .catch(error => resolve(mylicencia));
   
  });


}

module.exports = {
 getLoginLicencia
 }

