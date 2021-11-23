var anexosController = {}

// API PARA SUBIR IMAGENES
// Configuracion
/*anexosController.subirimagen = function(request,response){

    if(request.params.ext == '' || request.params.ext == undefined || request.params.ext == null ){
        response.json({state:false,mensaje:'La extensión es obligatoria'})
        return false
    }

    if(request.params.nombre == '' || request.params.nombre == undefined || request.params.nombre == null ){
        response.json({state:false,mensaje:'El nombre es obligatorio'})
        return false
    }

    var nombre = request.params.nombre  + Math.floor(Math.random() * (99999 - 0)) + 0;
 
    var upload = multer({
        // Definimos la ubicacion
        storage:multer.diskStorage({
            destination:function(req,res,callback){
                callback(null,appRoot + '/uploads')
        },
        // Configuramos como se va a llamar el archivo
        filename: function(req,file,callback){
            callback(null,nombre + path.extname(file.originalname))
        },
    }),
    fileFilter:function(request,file,callback){
        var ext = path.extname(file.originalname)
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.tif' && ext != '.pdf' && ext != '.doc' && ext != '.docx'){
            return callback({state:false,message:'Solo se soportan imagenes'},null)
        }
        callback(null,true)
    }
}).single('userfile')

//Uso
upload(request,response,function(respuestafinal){
    console.log(respuestafinal)
    if (respuestafinal != undefined){
        response.json(respuestafinal)
        return false;
    }
    else{
        response.json({state:true,mensaje:'Archivo cargado'})
        return false;        
    }
})

}*/

anexosController.subirimagen = function(request,response){

    var config = {
        destinoPath:'/Anexosproductos',
        extensiones:['.jpg','.jpeg','.png','.git','.tif','.pdf'],
        nombrearchivo:'nombreimagen',
        inputName:'userFile'
    }

    
    Herramientas.UploadFiles(request,config,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })

}

module.exports.anexos = anexosController