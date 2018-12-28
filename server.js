// server.js
// alphadriver rest api

var PubNub = require('pubnub')
var pubnub = new PubNub({
    subscribeKey: "sub-c-6b07c230-8558-11e8-9083-323d8442fcf0",
    publishKey: "pub-c-af5bb6a9-28ee-4111-b657-044aa57f469f",
    secretKey: "sec-c-M2I2ZDYwMTktOWQwNy00ZDg0LWFjYmQtMzhiZmIxNDQxYjIy",
    ssl: true
})


const Sequelize = require('sequelize');

const sequelize = new 
Sequelize('postgres://adsoft:5i5i5i5i@35.237.69.58:5432/alphadriver');


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
        },
	contenido: {
                type: Sequelize.STRING
        },
	peso: {
                type: Sequelize.STRING
        },
	email_cliente: {
                type: Sequelize.STRING
        },
	numero_pedido: {
                type: Sequelize.STRING
        },
	embalaje: {
                type: Sequelize.STRING
        },
	cita_carga: {
                type: Sequelize.STRING
        },
	cita_entrega: {
                type: Sequelize.STRING
        },
	numero_guia: {
                type: Sequelize.STRING
        },
        total_pagar: {
                type: Sequelize.STRING
        },
        tel_cliente: {
                type: Sequelize.STRING
        },
        codigo_operador: {
                type: Sequelize.STRING
        },
        numero_economico: {
                type: Sequelize.STRING
        },
        placas: {
                type: Sequelize.STRING
        },
        modelo: {
                type: Sequelize.STRING
        },
        dolly_rem: {
                type: Sequelize.STRING
        },
        marca: {
                type: Sequelize.STRING
        },
        tipo_combustible: {
                type: Sequelize.STRING
        },
        jsonfallas: {
                type: Sequelize.STRING
        },
        jsonpuntos: {
                type: Sequelize.STRING
        }
	,
        nombre_operador: {
                type: Sequelize.STRING
        }
	,
        apellidos: {
                type: Sequelize.STRING
        }
	,
        email_operador: {
                type: Sequelize.STRING
        }
	,
        rfc_operador: {
                type: Sequelize.STRING
        }
	,
        id_flota: {
                type: Sequelize.STRING
        },
        tag: {
                type: Sequelize.STRING
        }




  });
  

// call the packages

var express = require('express')
var cors = require('cors')
var app = express();
app.use(cors())

var bodyParser = require('body-parser');

// config app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
var port = process.env.PORT || 8081; 

// routes for our api
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('something is happen..');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();  // make sure we go to the next routes
});


// test route

router.get('/', function(req, res) {
 res.json({ message: 'yahoo!! welcome to our api !' });
});

// more routes for our API will happen here
router.route('/viajes')
 
  // create a product accessed at POST
  // http://localhost:8080/api/products
  
 .post(function (req, res) {

	 pubnub.publish(
    	{
       	 message: { 
            
                                           codigo: req.body.codigo, 
                                           descripcion: req.body.descripcion, 
                                           origen: req.body.origen, 
                                           destino : req.body.destino 



        },
        	channel: 'hello_world',
       		sendByPost: false, // true to send via post
        	storeInHistory: false, //override default storage options
        	meta: { 
           	 "cool": "meta"
        	}   // publish extra meta with the request
    	}, 
    	function (status, response) {
        	if (status.error) {
           	 // handle error
           	 console.log(status)
        	} else {
            	console.log("message Published w/ timetoken", response.timetoken)
        	}
    	}
   	);
 

	 return Viajes
	 .create({ 
		 				codigo: req.body.codigo, 
						descripcion: req.body.descripcion, 
						origen: req.body.origen, 
						destino : req.body.destino 
					})
					.then(todoItem => res.status(201).send(todoItem))
					.catch(error => res.status(200).send(error));
	})
  
 // get all the devices (accessed at 
 // http://localhost:8080/api/viajes
 .get(function (req, res) {
  
   Viajes.findAll().then(viajes => {
	   	res.json(viajes);
	  })
 });

// on routes that end in /products/:product_id
router.route('/viajes/:viaje_id')
 // get the device with that id 
 // accessed at GET 
 // http://localhost:8080/api/viajes/:viaje_id

 .get(function(req, res) {
	
	return Viajes
    .findById(req.params.viaje_id, {
    })
    .then(myviaje => {
      if (!myviaje) {
        return res.status(404).send({
          message: 'Viaje Not Found',
        });
      }
      return res.status(200).send(myviaje);
    })
    .catch(error => res.status(400).send(myviaje));
	})

 // update the product with this id
 // accessed at PUT
 // http://localhost:8080/api/products/:product_id

 .put(function (req, res) {
	 return Productos
    .findById(req.params.product_id, {
    })
    .then(myproduct => {
      if (!myproduct) {
        return res.status(404).send({
          message: 'Product Not Found',
        });
      }
      return myproduct
        .update({
					codigo: req.body.codigo || myproduct.codigo,
                  			nombre: req.body.nombre || myproduct.nombre,
					precio: req.body.precio || myproduct.precio,
					exist:  req.body.exist || myproduct.exist
        })
        .then(() => res.status(200).send(myproduct))  // Send back the updated product.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
})

 // delete the product with this id 
 // accessed at DELETE
 // http://localhost:8080/api/products/:product_id
 .delete(function (req, res) {
	return Productos
    .findById(req.params.product_id)
    .then(myproduct => {
      if (!myproduct) {
        return res.status(400).send({
          message: 'Product Not Found',
        });
      }
      return myproduct
        .destroy()
        .then(() => res.status(200).send({ message: 'Product deleted successfully.' }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));

	
 });

 // register our routes
app.use('/api', router);
//app.use(require('cors')());

// start the server
app.listen(port);
console.log('Magic happens on port: ' + port);
