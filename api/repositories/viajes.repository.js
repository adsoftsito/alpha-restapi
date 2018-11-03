'use strict';

var _ = require('lodash');
var shortid = require('shortid');

/*
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


  const Viajes = sequelize.define('viajes', {
	codigo: {
	    type: Sequelize.INTEGER
	},
	descripcion: {
		  type: Sequelize.STRING
	},
	origen: {
                type: Sequelize.STRING
        },
	destino: {
                type: Sequelize.STRING
        }
  });

  */
////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function getAllViajes() {
  //console.log(params);
  return new Promise(function(resolve, reject) {
    
    Viajes.findAll().then(viajes => {
      console.log(viajes);

      resolve(JSON.stringify(viajes));    
     });

  });
  
 
}



module.exports = {
  getAllViajes
}

