var modelVendedores = require(appRoot + '/api/models/vendedoresModel').vendedores;

var vendedoresController = {}

vendedoresController.registrar = function(request,response){
    
    var post = {
        nombrecompleto:request.body.nombrecompleto,
        email:request.body.email,        
        password:MD5(request.body.password),
        confirm:MD5(request.body.confirm),
        telefono:request.body.telefono,
        direccion:request.body.direccion
    }
    
    //Validaciones nombre
    if(post.nombrecompleto == '' || post.nombrecompleto == undefined || post.nombrecompleto == null){
        response.json({state:false,mensaje:'El nombre es un campo obligatorio'})
        return false;
    }

    if (post.nombrecompleto.length <=3){
        response.json({state:false,mensaje:'El nombre debe superar 3 caracteres'}) 
        return false;
    }

    if(post.nombrecompleto.length >=60){
        response.json({state:false,mensaje:'El nombre no puede superar 60 caracteres'}) 
        return false;
    }



    //Validaciones email
    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El email es un campo obligatorio'})
        return false;
    }

    /*var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El email es un campo obligatorio'})
        return false;
    }else if(! emailRegex.test(post.email)){            
            response.json({state:false,mensaje:'Correo no valido'}) 
            return false;
        }*/


    //Validaciones password
    /*if(post.password == '' || post.password == undefined || post.password == null){
        response.json({state:false,mensaje:'La contraseña es un campo obligatorio'})
        return false;
    }

    if(post.confirm == '' || post.confirm == undefined || post.confirm == null){
        response.json({state:false,mensaje:'La confirmación de contraseña es un campo obligatorio'})
        return false;
    }*/

    /*var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(passwordRegex.test(post.password) == false){
      console.log('Password inseguro')
      return false;
    }*/

    /*if(post.password != post.confirm){
        response.json({state:false,mensaje:'La contraseña y la confirmación de contraseña deben ser iguales'})
        return false;
    }*/

    if(post.telefono == '' || post.telefono == undefined || post.telefono == null){
        response.json({state:false,mensaje:'El telefono es un campo obligatorio'})
        return false;
    }

    if(post.direccion == '' || post.direccion == undefined || post.direccion == null){
        response.json({state:false,mensaje:'La direccion es un campo obligatorio'})
        return false;
    }

   modelVendedores.Emailexiste(post,function(existe){
        console.log(existe.data.length)

        if(existe.data.length >= 1){
            response.json({state:false,mensaje:'El email ya está registrado intente con otro'})
            return false
        }
        else{

            modelVendedores.guardar(post,function(respuesta){
            
            
            if(respuesta.info._id != ''){
                response.json({state:true,mensaje:'Vendedor creado correctamente'})
                return false;
            }
            else{
                response.json({state:false,mensaje:'Error al crear Vendedor', info:respuesta})
                return false;
            }
            })
        }
        
    })

}


vendedoresController.listartodos = function(request,response){
    modelVendedores.listartodos(null,function(respuesta){
        response.json(respuesta)
    })
}

vendedoresController.listartodosXLS = function(request,response){

    modelVendedores.listartodos(null,function(respuesta){

        //Importamos estas dos librerias
        var fs = require("fs");
        var json2xls = require('json2xls');
        
        var json = []

        for (var i = 0; i < respuesta.data.length; i++) {
            json.push(respuesta.data[i]._doc)            
        }
        console.log(respuesta)
        // Para asignarle el array json al metodo json2xls
        var xls = json2xls(json);

        // Para covertir el archivo a formato xlsx
        fs.writeFileSync('vendedores.xlsx', xls, 'binary');

        // Para descargar el archivo
        response.download('vendedores.xlsx',function(err){
            if (err) {
                console.log(err)
            }
            else{
                console.log('Descarga completa')
                fs.unlinkSync('vendedores.xlsx')// Para eliminar el archivo despues de que se descarga
            }
        })

    })
}
    
vendedoresController.listarId = function(request,response){
    var post = {
        id:request.body.id
    }

    if(post.id == '' || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:'El id es un campo obligatorio'})
        return false;
    }

    modelVendedores.listarId(post,function(respuesta){
        response.json(respuesta)
    })
}


vendedoresController.actualizar = function(request,response){
    console.log('Estpy en actualizar coontrolador')
    var post = {
        nombrecompleto:request.body.nombrecompleto,
        rol_id:request.body.rol_id,
        estado:request.body.estado,
        codigoactivacion:request.body.codigoactivacion,
        id:request.body.id,
        email:request.body.email

    }
    console.log(post)
    
    if(post.id == '' || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:'El idnombre es un campo obligatorio'})
        return false;
    }

    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El email es un campo obligatorio'})
        return false;
    }

    if(post.nombrecompleto == '' || post.nombrecompleto == undefined || post.nombrecompleto == null){
        response.json({state:false,mensaje:'El nombre es un campo obligatorio'})
        return false;
    }

    if (post.nombrecompleto.length <=3){
        response.json({state:false,mensaje:'El nombre debe superar 3 caracteres'}) 
        return false;
    }

    if(post.nombrecompleto.length >=60){
        response.json({state:false,mensaje:'El nombre no puede superar 60 caracteres'}) 
        return false;
    }

    
    if(post.rol_id == '' || post.rol_id == undefined || post.rol_id == null){
        response.json({state:false,mensaje:'El rol_id es un campo obligatorio'})
        return false;
    }
   
    if(post.estado === '' || post.estado === undefined || post.estado === null){
        response.json({state:false,mensaje:'El estado es un campo obligatorio'})
        return false;
    }

    if(post.codigoactivacion == '' || post.codigoactivacion == undefined || post.codigoactivacion == null){
        response.json({state:false,mensaje:'El codigoactivacion es un campo obligatorio'})
        return false;
    }

    modelVendedores.ValidarPrivilegios(post,function(respuestapriv){
        console.log(request.session.rol + ' Este es el rol')
        if(request.session.rol != '1'){
            response.json({state:false,mensaje:"Su email no tiene permisos para actualizar"})
        }else{
            modelVendedores.Idexiste(post,function(existe){
                console.log(existe.data.length + 'existe')
                if(existe.data.length == 0){
                    console.log(existe.data._id)
                    response.json({state:false,mensaje:'El Id no existe'})
                    return false
                }
                else{
        
                    modelVendedores.actualizar(post,function(respuesta){
                        console.log(respuesta)
                    
                        if(respuesta.info._id != ''){
                            response.json({state:true,mensaje:'Vendedor actualizado correctamente'})
                            return false;
                        }
                        else{
                            response.json({state:false,mensaje:'Error al actualizar el Vendedor', info:respuesta})
                            return false;
                        }
                    })
                }
                
            })
        }
        
    })
    

}

vendedoresController.eliminar = function(request,response){

    var post = {
        id:request.body.id
    }


    if(post.id == '' || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:'El idnombre es un campo obligatorio'})
        return false;
    }

    modelVendedores.eliminar(post,function(respuesta){

        
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Vendedor eliminado'})
            console.log(respuesta)
        }
        else{
            response.json({state:false,mensaje:'Error al eliminar'})
        }
        
        
    })
}







module.exports.vendedores = vendedoresController