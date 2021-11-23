global.express = require('express')
global.app = express();
global.path = require('path')
global.appRoot = path.resolve(__dirname)
global.multer  = require('multer')
global.config = require(appRoot + '/config.js').config
const mongosee = require('mongoose')
global.MD5 = require('MD5')
global.Herramientas = require(appRoot + '/api/herramientas/herramientas.js').Herramientas

// Ls cabeceras permiten comunicacion con los datos
app.all('*',function(req, res, next){

	var whitelist = req.headers.origin; // whitelist significa que acepta cualquier origen
	
	res.header('Access-Control-Allow-Origin',whitelist);	
	res.header('Access-Control-Allow-Methonds','GET,PUT,POST,DELETE,OPTIONS,HEAD');		
	res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
	res.header('Access-Control-Allow-Credentials','true');

next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


session = require("express-session")({    
    secret: config.secret,
    resave: true,
    saveUninitialized:true ,
    cookie: { path: '/', httpOnly: true,    
    maxAge: config.tiempocookie
    },
    name : config.nombrecookie ,rolling: true
})

app.use(session);

// CONEXION A MONGOOSE
mongosee.connect('mongodb://127.0.0.1:27017/' + 'expresateFloristeria', {useNewUrlParser:true,useUnifiedTopology:true},(error,res) =>{

    if (error) {
        console.log(error)
        
    }else{
        console.log('Conexion a Mongo Correcta')
    }
})



// Rutas
require(appRoot + '/routes/rutas.js')

//Carpeta publica para acceder a uploads(imagenes/archivos)
app.use('/uploads',express.static(__dirname + '/uploads'))



app.listen(config.puerto,function(){
    console.log('Servidor funcionando por el puerto:' + config.puerto)
})

